import classNames from "classnames";
import React, {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from "react";
import styles from "./Input.module.scss";
import Icon from "../Icon/Icon";

interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "prefix"
  > {
  label?: string;
  error?: string | false;
  suffix?: ReactNode;
  prefix?: ReactNode;
  showCount?: boolean;
  showEyeIcon?: boolean;
  inputClassName?: string;
  containerClassName?: string;
  onClear?: () => void;
}

const Input: FC<InputProps> = ({
  label,
  className,
  error,
  suffix,
  prefix,
  showCount,
  inputClassName,
  showEyeIcon,
  type,
  containerClassName,
  onClear,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={classNames(styles.input_container, containerClassName, {
        [styles.disabled]: rest.disabled,
      })}
    >
      {label && <label className="title-3 text-grey-500">{label}</label>}
      <div className={classNames(styles.input_field, className)}>
        {prefix && <div className={styles.prefix}>{prefix}</div>}
        <input
          {...rest}
          type={showEyeIcon ? (!showPassword ? "password" : "text") : type}
          className={classNames(styles.input, inputClassName)}
        />
        {onClear && (
          <div className={styles.clear} onClick={onClear}>
            &#x2715;{" "}
          </div>
        )}
        {suffix && <div className={styles.suffix_icon}>{suffix}</div>}
        {showEyeIcon && (
          <div className={styles.suffix_icon}>
            <Icon
              className="cursor-pointer"
              size={18}
              name={showPassword ? "eye" : "eye-slash"}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        )}
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Input;
