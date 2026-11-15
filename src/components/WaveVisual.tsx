import React, { useEffect, useRef } from 'react';

export const WaveVisual: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 160);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 800;
      height = canvas.height = 160;
    };

    window.addEventListener('resize', handleResize);

    let step = 0;

    const render = () => {
      step += 0.015;
      ctx.clearRect(0, 0, width, height);

      const lines = 7;
      const points = 60;
      const spacing = width / points;

      for (let j = 0; j < lines; j++) {
        ctx.beginPath();
        const alpha = 0.08 + (j / lines) * 0.22;
        const isOrange = j === lines - 1;
        ctx.strokeStyle = isOrange 
          ? `rgba(255, 155, 56, ${alpha * 0.9})` 
          : `rgba(168, 121, 255, ${alpha})`;
        ctx.lineWidth = j === lines - 1 ? 1.5 : 1;

        for (let i = 0; i <= points; i++) {
          const x = i * spacing;
          // Mathematical wave formula with harmonic frequencies
          const angle = (i * 0.12) + step + (j * 0.35);
          const y = height * 0.55 + 
            Math.sin(angle) * (18 + j * 4) + 
            Math.cos(angle * 0.5) * 12;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative w-full overflow-hidden pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-36 md:h-44" />
    </div>
  );
};
