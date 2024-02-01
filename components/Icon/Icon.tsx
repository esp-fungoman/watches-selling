import {
  DetailedHTMLProps,
  HTMLAttributes,
  MouseEvent,
  forwardRef,
} from "react";
import { IconNames } from "./Icon.type";
import IcomoonReact from "icomoon-react";
import classNames from "classnames";
import styles from "./Icon.module.scss";
import iconSet from "./selection.json";

interface IconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  name?: string;
  size?: number;
  color?: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
  ref?: any;
}

const Icon: React.FC<IconProps> = (props) => {
  const { style, onClick, color, size = 20, name = "", className = "" } = props;

  return name ? (
    <IcomoonReact
      className={classNames(styles.icon, className)}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={name}
      style={{ ...style }}
      onClick={onClick}
    />
  ) : null;
};

export default Icon;