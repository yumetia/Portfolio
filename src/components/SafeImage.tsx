import React, { useEffect, useRef } from "react";

type Props = {
  src: string;  
  alt: string;     // normal image URL
  width?: number;
  height?: number;
  className?: string;
  roundedBlob:Boolean;
};

const SafeImage: React.FC<Props> = ({ src,alt, width, height, className,roundedBlob=false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    (async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Load image normally
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = src;

      img.onload = () => {
        canvas.width = width || img.width;
        canvas.height = height || img.height;
        ctx.drawImage(img, 0, 0);
      };
    })();
  }, [src, alt,width, height]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      style={{
        pointerEvents: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
        WebkitTouchCallout: "none",
        borderRadius: roundedBlob ? "30% 70% 70% 30% / 67% 62% 38% 33%": "",
        overflow: roundedBlob ? "hidden" : ""
      }}
    />
  );
};

export default SafeImage;
