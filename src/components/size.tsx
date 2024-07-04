import React from "react";

type SizeProps = React.ComponentProps<"div"> & {
  selected?: boolean;
};

export const Size: React.FC<SizeProps> = ({ selected, ...rest }) => {
  return (
    <div
      className="d-flex w-auto align-items-center justify-content-center border border-black px-3 py-2 ratio-1x1"
      style={{
        backgroundColor: selected ? "#000" : "#fff",
        color: selected ? "#fff" : "#000",
      }}
      {...rest}
    />
  );
};
