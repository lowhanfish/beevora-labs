"use client";

import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";

export default function ServiceTilt({ children }: { children: ReactNode }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const reset = () => {
    if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    frameRef.current?.style.setProperty("--tilt-x", "0deg");
    frameRef.current?.style.setProperty("--tilt-y", "0deg");
  };

  useEffect(() => () => {
    if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
  }, []);

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
    const y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
    if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(() => {
      frame.style.setProperty("--tilt-x", `${-y * 4}deg`);
      frame.style.setProperty("--tilt-y", `${x * 5}deg`);
    });
  };

  return <div ref={frameRef} className="service-tilt" onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset}>{children}</div>;
}
