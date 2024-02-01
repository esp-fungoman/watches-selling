import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";
import { Spin } from "antd";

interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "type"
  > {
  className?: string;
  children?: ReactNode;
  type?: "outlined" | "filled" | "text" | "outlined-white";  variant?: "danger" | "primary";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = "filled",
    variant = "primary",
    children,
    className,
    loading,
    disabled,
    ...rest
  } = props;
  
  return (
    <button
      {...rest}
      className={classNames(
        styles.button,
        styles[type],
        styles[variant],
        className
      )}
      disabled={loading || disabled}
    >
      {loading ? <Spin /> : children}
    </button>
  );
};

export default Button;
