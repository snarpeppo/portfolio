"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { StlScene } from "./StlScene";
import { StlPlaceholder } from "./StlPlaceholder";
import { StlErrorBoundary } from "./StlErrorBoundary";

interface StlCardViewerProps {
  stlUrl?: string;
}

export function StlCardViewer({ stlUrl }: StlCardViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [dimensions, setDimensions] = useState<{ width: number; depth: number; height: number } | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !stlUrl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stlUrl]);

  const handleDimensions = useCallback(
    (dims: { width: number; depth: number; height: number }) => {
      setDimensions(dims);
    },
    []
  );

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  if (!stlUrl || hasError) {
    return <StlPlaceholder />;
  }

  return (
    <div ref={containerRef} className="mb-4 overflow-hidden rounded-xl shadow-pressed-sm">
      <div className="aspect-square w-full bg-surface-container-low">
        {inView ? (
          <StlErrorBoundary onError={handleError}>
            <Canvas
              dpr={[1, 1.5]}
              gl={{
                antialias: true,
                powerPreference: "low-power",
              }}
              camera={{ position: [3, 2, 5], fov: 30 }}
              style={{ width: "100%", height: "100%" }}
            >
              <Suspense fallback={null}>
                <StlScene url={stlUrl} onDimensions={handleDimensions} />
              </Suspense>
            </Canvas>
          </StlErrorBoundary>
        ) : (
          <div className="flex aspect-square items-center justify-center">
            <svg
              className="mx-auto text-outline-variant"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" />
              <path d="M2 7l10 5 10-5" />
              <path d="M12 22V12" />
            </svg>
          </div>
        )}
      </div>
      {dimensions && (
        <div className="px-3 py-2 text-xs text-on-surface-variant">
          <span>
            {dimensions.width} × {dimensions.depth} × {dimensions.height} mm
          </span>
        </div>
      )}
    </div>
  );
}
