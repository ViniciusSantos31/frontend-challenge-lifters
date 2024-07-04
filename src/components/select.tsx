import { forwardRef } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options?: string[];
  error?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <div className="form-group w-100">
        <label htmlFor={rest.id} className="text-white">
          {label}
        </label>
        <select
          className={`form-control w-100 ${error && "error"}`}
          {...rest}
          ref={ref}
        >
          <option value="">-</option>
          {rest.options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);
