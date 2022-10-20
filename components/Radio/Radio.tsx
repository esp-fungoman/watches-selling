
import styles from "./Radio.module.scss"

export interface RadioProps extends React.HTMLProps<HTMLInputElement> {
  label?: string
  id?: string
  className?: string
}

const Radio = (props: RadioProps) => {
  const { label, id, className, ...rest } = props

  return (
    <label className={`${styles.container} ${className}`} htmlFor={id || label}>
      {label}
      <input type="radio" id={id || label} {...rest} />
      <span className={styles.checkmark} />
    </label>
  )
}

export default Radio
