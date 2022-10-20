import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./Button.module.scss";
import Loading from "./Loading";

export interface ButtonProps
  extends Omit<
    React.HTMLProps<HTMLButtonElement>,
    "size" | "prefix" | "className"
  > {
  text?: string | ReactNode;
  width?: string | number;
  className?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outlined"
    | "no-outlined"
    | "secondary-no-outlined"
    | "secondary-no-outlined-bold"
    | "underlined"
    | "basic"
    | "";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  backgroundColor?: string;
  isLoading?: boolean;
  children?: ReactNode;
}

const Button = (props: ButtonProps) => {
  const {
    id,
    text,
    className,
    prefix,
    suffix,
    variant = "primary",
    size = "medium",
    disabled,
    width,
    type = "button",
    isLoading,
    backgroundColor,
    children,
    ...rest
  } = props;

  const buttonClassName = classNames(
    className,
    styles.button,
    styles.container,
    {
      [styles.disabled]: disabled,
      [styles.outlined]: variant === "outlined",
      [styles.underlined]: variant === "underlined",
      [styles.secondary]: variant === "secondary",
      [styles.no_outlined]: variant === "no-outlined",
      [styles.basic]: variant === "basic",
      [styles.secondary_no_outlined]: variant === "secondary-no-outlined",
      [styles.large]: size === "large",
      [styles.small]: size === "small",
      [styles.secondary_no_outlined_bold]:
        variant === "secondary-no-outlined-bold",
      [styles.loading]: isLoading,
    }
  );
  return (
    <button
      className={buttonClassName}
      id={id}
      type={type}
      disabled={disabled || isLoading}
      {...rest}
      style={{ width, backgroundColor }}
    >
      {isLoading && <Loading />}
      {prefix && <div>{prefix}</div>}
      {text || children}
      {suffix && <div>{suffix}</div>}
    </button>
  );
};

export default Button;
