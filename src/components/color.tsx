import React from "react";

type ColorProps = React.ComponentProps<"div"> & {
  color?: string;
};

export const Color: React.FC<ColorProps> = ({ color, style, ...rest }) => {
  return (
    <div
      className="rounded-circle p-1 w-100"
      {...rest}
      style={{
        backgroundColor: color?.length === 7 ? color : "#000",
        aspectRatio: "1/1",
        minWidth: "25px",
        ...style,
      }}
    />
  );
};
