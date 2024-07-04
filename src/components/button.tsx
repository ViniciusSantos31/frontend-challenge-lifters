import { Button as BootstrapButton } from "react-bootstrap";
import { cn } from "../utils/merge";

type Variant = "primary" | "secondary" | "link";

type ButtonProps = React.ComponentProps<typeof BootstrapButton> & {
  variant?: Variant;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  ...rest
}) => {
  const buttonVariants: Record<Variant, ButtonProps["className"]> = {
    primary: "bg-dark text-light",
    secondary: "bg-light text-dark",
    link: "bg-transparent text-light text-decoration-none p-0",
  };

  return (
    <BootstrapButton
      className={cn(
        "d-flex align-items-center justify-content-center rounded-0 w-100 gap-2",
        buttonVariants[variant],
        className
      )}
      variant="variant"
      {...rest}
    />
  );
};
