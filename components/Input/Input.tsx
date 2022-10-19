import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./Input.module.scss";

export interface InputProps
  extends Omit<
    React.HTMLProps<HTMLInputElement>,
    "size" | "prefix" | "className"
  > {
  label?: string;
  className?: string;
  required?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  helperText?: string;
  error?: string;
  success?: string;
  width?: string | number;
  variant?: "filled" | "outlined";
  size?: "small" | "medium" | "large";
}

const Input = (props: InputProps) => {
  const {
    label,
    required = false,
    className,
    prefix,
    suffix,
    readOnly,
    variant = "outlined",
    helperText,
    success,
    error,
    size = "medium",
    id,
    width,
    form,
    disabled,
    ...rest
  } = props;

  const inputWrapperClassName = classNames(className, styles.input, {
    [styles.filled]: variant === "filled",
    [styles.disabled]: disabled,
    [styles.large]: size === "large",
    [styles.small]: size === "small",
    [styles.label]: label,
  });

  return (
    <div className={inputWrapperClassName} style={{ width }}>
      {success && <div className={styles.success}>{success}</div>}
      <div className={styles.container}>
        {label && (
          <label htmlFor={id}>
            {label} {required && <span className={styles.error}>*</span>}
          </label>
        )}
        <div className={styles.content}>
          {prefix && <div className={styles.prefix_container}>{prefix}</div>}
          <input
            readOnly={readOnly}
            disabled={disabled}
            id={id}
            {...rest}
          />
          {suffix && <div className={styles.suffix_container}>{suffix}</div>}
        </div>
      </div>
      {helperText && <div>{helperText}</div>}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
