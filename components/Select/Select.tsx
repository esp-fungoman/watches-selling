import classNames from "classnames";
import React, { useId, ReactNode, useEffect, useState } from "react";
import ReactSelect, { components, StylesConfig } from "react-select";

import Icon from "../Icon/Icon";

import styles from "./Select.module.scss";

interface IOption {
  label: string | ReactNode;
  value: string | number;
}

export interface SelectProps {
  id?: string;
  required?: boolean;
  label?: string;
  className?: string;
  defaultValue?: IOption[] | IOption | string;
  value?: IOption[] | IOption | string | number;
  options?: IOption[];
  prefixIcon?: string;
  helperText?: string;
  disabled?: boolean;
  placeholder?: string;
  menuLeft?: string | number;
  isMulti?: boolean;
  isSearchable?: boolean;
  closeMenuOnSelect?: boolean;
  menuFooter?: ReactNode;
  width?: number | string;
  menuWidth?: string | number;
  menuPortalTarget?: any;
  ellipsis?: boolean;
  isClearable?: boolean;
  autoFocus?: boolean;
  variant?: "filled" | "outlined" | "no-outlined";
  size?: "small" | "medium" | "large";
  inputRef?: any;
  shouldControlShowValue?: boolean;
  controlStyle?: any;
  placeholderStyle?: any;
  singleValueStyles?: any;
  onChange?: (value: any) => void;
  onInputChange?: (e: string) => void;
}

const Select = (props: SelectProps) => {
  const {
    required,
    label,
    className,
    helperText,
    id,
    width,
    autoFocus,
    menuLeft,
    menuPortalTarget,
    prefixIcon,
    disabled,
    isMulti = false,
    options,
    value,
    isClearable,
    shouldControlShowValue,
    placeholder,
    isSearchable = true,
    defaultValue,
    closeMenuOnSelect = false,
    menuWidth,
    singleValueStyles,
    menuFooter,
    inputRef,
    controlStyle,
    ellipsis,
    placeholderStyle,
    variant = "outlined",
    size = "medium",
    onInputChange,
    onChange,
  } = props;

  const [selected, setSelected] = useState<IOption[] | IOption | string>();

  useEffect(() => {
    const getInitValue = (value: any) =>
      options?.find((opt) => opt === value || opt.value === value);

    setSelected(getInitValue(value || defaultValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, defaultValue]);

  const selectWrapperClassName = classNames(className, styles.select, {
    [styles.filled]: variant === "filled",
    [styles["no-outlined"]]: variant === "no-outlined",
    [styles.disabled]: disabled,
    [styles.large]: size === "large",
    [styles.small]: size === "small",
    [styles.label]: label,
  });

  const primary20 = "#FEF1F2";

  const customStyles: StylesConfig = {
    container: (styles) => ({ ...styles, width: "100%" }),
    control: (styles) => ({
      ...styles,
      cursor: "pointer",
      border: "none",
      boxShadow: "none",
      fontSize: size === "small" ? "14px" : "16px",
      maxWidth: "100%",
      minWidth: ellipsis ? "unset" : "max-content",
      minHeight: "min-content",
      backgroundColor: "transparent",
      fontWeight: 300,
      ...controlStyle,
    }),
    option: (styles, { isSelected }) => {
      return {
        ...styles,
        width: menuWidth || "60vw",
        padding: "10px 20px",
        maxWidth: 400,
        minWidth: 150,
        cursor: isSelected ? "default" : "pointer",
        ":active": {
          ...styles[":active"],
          backgroundColor: "#e60112",
        },
        ":hover": {
          ...styles[":hover"],
          backgroundColor: isSelected ? "#e60112" : primary20,
        },
        backgroundColor: isSelected ? "#e60112" : "white",
      };
    },
    dropdownIndicator: (styles) => ({ ...styles, padding: 0 }),
    input: (styles) => ({
      ...styles,
      padding: 0,
      margin: 0,
      fontWeight: 300,
    }),
    placeholder: (styles) => ({
      ...styles,
      padding: 0,
      margin: 0,
      width: "max-content",
      fontWeight: 300,
      ...placeholderStyle,
    }),
    menu: (styles) => ({
      ...styles,
      width: "fit-content",
      top: "30px",
      left: menuLeft || "-10px !important",
    }),
    menuPortal: (styles) => ({
      ...styles,
      zIndex: 2,
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: 0,
      width: "max-content",
    }),
    singleValue: (styles) => ({
      ...styles,
      textOverflow: "ellipsis",
      maxWidth: "90%",
      whiteSpace: "nowrap",
      overflow: "hidden",
      display: "initial",
      ...singleValueStyles,
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    indicatorsContainer: (styles) => ({ ...styles, alignItems: "center" }),
  };

  const handleChange = (dropdownValues: any) => {
    onChange?.(dropdownValues);
    setSelected(dropdownValues);
  };

  const MenuList = (props: any) => {
    return (
      <React.Fragment>
        <components.MenuList {...props}>
          {props.children}
          {menuFooter}
        </components.MenuList>
      </React.Fragment>
    );
  };

  const SingleValue = (props: any) => (
    <components.SingleValue {...props}>
      {shouldControlShowValue ? props.data.value : props.data.label}
    </components.SingleValue>
  );

  return (
    <div className={selectWrapperClassName} style={{ width }}>
      <div className={styles.container}>
        {label && (
          <label htmlFor={id}>
            {label}
            {required && <span className={styles.required_mark}> *</span>}
          </label>
        )}
        <div className={styles.content_container}>
          {prefixIcon && <Icon icon={prefixIcon} />}
          <ReactSelect
            id={id}
            instanceId={useId()}
            options={options}
            value={options?.find(
              (opt) =>
                opt === selected ||
                opt.value === selected ||
                opt.value === (selected as IOption)?.value
            )}
            autoFocus={autoFocus}
            placeholder={placeholder}
            isClearable={isClearable}
            closeMenuOnSelect={closeMenuOnSelect || !isMulti}
            isDisabled={disabled}
            styles={customStyles}
            menuPortalTarget={menuPortalTarget}
            menuPlacement="auto"
            // @ts-ignore
            inputRef={inputRef}
            isMulti={isMulti}
            isSearchable={isSearchable}
            onChange={handleChange}
            components={{ MenuList, SingleValue }}
            onInputChange={onInputChange}
          />
        </div>
      </div>
      {helperText && <div>{helperText}</div>}
    </div>
  );
};

export default Select;
