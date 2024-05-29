import classNames from "classnames";
import { FC } from "react";

interface DividerProps {
  className?: string;
  color?: string;
  orientation?: "vertical" | "horizontal";
}

const Divider: FC<DividerProps> = ({
  className,
  color = "#a3a9b3",
  orientation = "horizontal",
}) => {
  return (
    <hr
      className={classNames(className, {
        "w-full h-[1px]": orientation === "horizontal",
        "h-full w-[1px]": orientation === "vertical",
      })}
      style={{ borderColor: color }}
    />
  );
};

export default Divider;
