import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
};

const SafeImage: React.FC<Props> = ({ className = "", style,...rest }) => {
  return (
    <img
      {...rest}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
      style={{
        WebkitUserSelect: "none",
        userSelect: "none",
        WebkitTouchCallout: "none",
        ...style,
      }} 
      className={`select-none ${className}`}
    />
  );
};

export default SafeImage;
