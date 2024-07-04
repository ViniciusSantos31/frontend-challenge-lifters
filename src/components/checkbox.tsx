type CheckboxProps = React.ComponentProps<"input"> & {
  type?: "checkbox";
  label?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  type = "checkbox",
  ...rest
}) => {
  return (
    <div className="d-flex align-items-center justify-content-center gap-2 w-auto">
      <input type={type} id={`checkbox-${label}`} {...rest} />
      <label htmlFor={`checkbox-${label}`} className="fs-6 text-center">
        {label}
      </label>
    </div>
  );
};
