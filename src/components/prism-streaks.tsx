"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export type PrismStreaksProps = {
  coreColor?: string;
  warmFringe?: string;
  coolFringe?: string;
  dustColor?: string;
  bgColor?: string;
  bgTint?: string;
  speed?: number;
  twist?: number;
  bend?: number;
  waist?: number;
  width?: number;
  dispersion?: number;
  brightness?: number;
  dustAmount?: number;
  dustRadius?: number;
  exposure?: number;
  mouseLean?: number;
  mainAlpha?: number;
  className?: string;
};

const DEFAULTS: Required<Omit<PrismStreaksProps, "className">> = {
  coreColor: "#0033ff",
  warmFringe: "#ff5900",
  coolFringe: "#00aeff",
  dustColor: "#ff8929",
  bgColor: "#000000",
  bgTint: "#000529",
  speed: 2,
  twist: 5,
  bend: 0.06,
  waist: 0,
  width: 0.33,
  dispersion: 0.048,
  brightness: 1.19,
  dustAmount: 1.28,
  dustRadius: 0.44,
  exposure: 1.97,
  mouseLean: 0.06,
  mainAlpha: 2,
};

const VERTEX_SHADER = /* glsl */ `
void main() { gl_Position = vec4(position, 1.0); }
`;

const FRAGMENT_SHADER = /* glsl */ `
uniform float iTime, iAlpha;
uniform vec2  iResolution, uMouse;
uniform vec3  uCore, uWarm, uCool, uDust, uBg, uBgTint;
uniform float uSpeed, uTwist, uBend, uWaist, uWidth, uDisperse, uBright, uDustAmt, uDustRadius, uExposure, uLean;

const int STREAKS = 34;

float hash(float n){ return fract(sin(n) * 43758.5453123); }
float hash2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

float fila(float e, float th){ float v = th / (abs(e) + th); return v * v; }

vec3 field(vec2 p, float t){
  vec3 acc = vec3(0.0);
  float flow = t * uSpeed;
  float sway = uMouse.x * uLean;
  float env  = mix(uWaist, 1.0, smoothstep(0.0, 0.95, abs(p.y - uMouse.y * 0.5)));
  for (int i = 0; i < STREAKS; i++){
    float fi = float(i);
    float s1 = hash(fi * 1.37);
    float s2 = hash(fi * 2.11 + 5.3);
    float lane = s1 * 2.0 - 1.0;
    float bend = sin(p.y * uTwist + s2 * 6.2831 + t * (0.3 + 0.5 * s2)) * uBend;
    float x = lane * uWidth * env + bend + sway * (0.6 + 0.4 * s1);
    float th = mix(0.0035, 0.016, s2);
    float dx = p.x - x;
    float disp = uDisperse * (0.25 + abs(dx) * 2.0);
    float cr = fila(dx + disp, th);
    float cg = fila(dx, th);
    float cb = fila(dx - disp, th);
    float fl = (0.45 + 0.55 * sin(p.y * 7.0 - flow * (0.6 + s1) + s2 * 15.0))
             * (0.6 + 0.4 * sin(p.y * 2.0 + s1 * 9.0 - flow * 0.3));
    float bright = (0.35 + 0.85 * s2) * uBright * max(fl, 0.0);
    acc += (cr * uWarm + cg * uCore + cb * uCool) * bright;
  }
  return acc;
}

float dust(vec2 uv, float t){
  vec2 q = uv * 130.0; q.y += t * uSpeed * 9.0;
  vec2 ip = floor(q), fp = fract(q);
  vec2 jit = vec2(hash2(ip), hash2(ip + 31.7));
  float d  = length(fp - jit);
  float on = step(0.80, hash2(ip + 13.1));
  float sz = mix(0.05, 0.22, hash2(ip + 7.3));
  float br = 0.35 + 0.65 * hash2(ip + 53.9);
  float tw = 0.5 + 0.5 * sin(t * 6.0 + hash2(ip) * 40.0);
  return smoothstep(sz, 0.0, d) * on * br * tw;
}

void main(){
  vec2 uv = (2.0 * gl_FragCoord.xy - iResolution.xy) / iResolution.y;
  float t = iTime;
  vec2 p = uv * (1.0 + 0.02 * sin(t * 0.2));

  float rg = length(uv * vec2(0.6, 0.45));
  vec3 col = mix(uBgTint, uBg, smoothstep(0.0, 1.4, rg));

  col += field(p, t);

  float md = length(uv - uMouse);
  float dustMask = exp(-md * md / (uDustRadius * uDustRadius));
  col += uDust * dust(uv, t) * uDustAmt * dustMask;

  col += uCore * exp(-md * md * 6.0) * 0.10;

  col = vec3(1.0) - exp(-col * uExposure);
  gl_FragColor = vec4(col, iAlpha);
}
`;

function hexToVec3(hex: string) {
  const c = new THREE.Color(hex);
  return new THREE.Vector3(c.r, c.g, c.b);
}

export function PrismStreaks(props: PrismStreaksProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cfg = { ...DEFAULTS, ...props };
  const {
    coreColor,
    warmFringe,
    coolFringe,
    dustColor,
    bgColor,
    bgTint,
    speed,
    twist,
    bend,
    waist,
    width,
    dispersion,
    brightness,
    dustAmount,
    dustRadius,
    exposure,
    mouseLean,
    mainAlpha,
  } = cfg;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.Fog(0x000000, 0, 15);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 80);
    camera.position.set(0, 0, 3);

    const mouse = new THREE.Vector2(0, 0);
    const mouseTarget = new THREE.Vector2(0, 0);

    const uniforms = {
      iTime: { value: 0 },
      iAlpha: { value: 0 },
      iResolution: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: mouse },
      uCore: { value: hexToVec3(coreColor) },
      uWarm: { value: hexToVec3(warmFringe) },
      uCool: { value: hexToVec3(coolFringe) },
      uDust: { value: hexToVec3(dustColor) },
      uBg: { value: hexToVec3(bgColor) },
      uBgTint: { value: hexToVec3(bgTint) },
      uSpeed: { value: speed },
      uTwist: { value: twist },
      uBend: { value: bend },
      uWaist: { value: waist },
      uWidth: { value: width },
      uDisperse: { value: dispersion },
      uBright: { value: brightness },
      uDustAmt: { value: dustAmount },
      uDustRadius: { value: dustRadius },
      uExposure: { value: exposure },
      uLean: { value: mouseLean },
    };

    const geometry = new THREE.PlaneGeometry(4, 4);
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function resize() {
      if (!canvas) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      renderer.setPixelRatio(dpr);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      uniforms.iResolution.value.set(w * dpr, h * dpr);
    }

    function onPointerMove(e: PointerEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const aspect = rect.width / rect.height;
      mouseTarget.set((x * 2 - 1) * aspect, -(y * 2 - 1));
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);

    const start = performance.now();
    let raf = 0;

    function tick(now: number) {
      const elapsed = now - start;
      uniforms.iTime.value = elapsed / 1000;
      const fade = Math.min(Math.max((elapsed - 400) / 1000, 0), 1);
      uniforms.iAlpha.value = fade * mainAlpha;
      mouse.lerp(mouseTarget, 0.3);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
    // Uniform values are captured once at mount; this effect owns the full WebGL lifecycle.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={props.className ?? "absolute inset-0 h-full w-full pointer-events-none"}
    />
  );
}
