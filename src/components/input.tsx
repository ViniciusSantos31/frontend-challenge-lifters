import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <div className="form-group">
        <label
          htmlFor={rest.id}
          className={`${error ? "text-danger" : "text-white"}`}
        >
          {label}
        </label>
        <input
          className={`form-control ${error && "error"}`}
          {...rest}
          ref={ref}
        />
        {error && <small className="text-danger">{error}</small>}
      </div>
    );
  }
);
