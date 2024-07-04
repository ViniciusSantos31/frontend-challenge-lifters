import React from "react";

type SizeProps = React.ComponentProps<"div">;

export const Size: React.FC<SizeProps> = ({ ...rest }) => {
  return (
    <div
      className="d-flex w-auto align-items-center justify-content-center border border-black px-3 py-2 ratio-1x1"
      {...rest}
    />
  );
};
