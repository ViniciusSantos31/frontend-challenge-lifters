import React from "react";

type ColorProps = React.ComponentProps<"div"> & {
  color?: string;
  width?: string;
  selected?: boolean;
};

export const Color: React.FC<ColorProps> = ({
  color,
  width,
  style,
  selected = false,
  ...rest
}) => {
  return (
    <div
      className="rounded-circle p-1 border-0 pe-auto"
      style={{
        backgroundColor: color?.length === 7 ? color : "#000",
        aspectRatio: "1/1",
        minWidth: "25px",
        width: "100%",
        maxWidth: width,
        border: selected ? "2px solid #000" : "none",
        offset: "2px",
        ...style,
      }}
      {...rest}
    />
  );
};
