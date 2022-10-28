import IcomoonReact from "icomoon-react"
import React from "react"
import iconSet from "./selection.json"

export interface IconProps {
  color?: string
  size?: number | string
  icon: string
  className?: string
  stroke?: string
  style?: React.CSSProperties
}

const Icon: React.FC<IconProps> = (props) => {
  const { style, color, size = 20, icon = "", className = "" } = props

  return icon ? (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
      style={{ ...style, display: "block", boxSizing: "border-box" }}
    />
  ) : null
}

export default Icon
