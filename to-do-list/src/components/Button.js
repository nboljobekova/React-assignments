import React from "react";
import "./Button.css";

const PRIMARY = "primary";
const DANGER = "danger";

const Button = ({children, type, ...rest}) => {
  let className = "btn"
  if (type === PRIMARY){
    className = `${className} btn-primary`
  } else if (type === DANGER){
    className = `${className} btn-danger`
  }
  return <button {...rest} className={className}>{children}</button>
}

export const PrimaryButton = props => (
  <Button {...props} type={PRIMARY} />
)

export const DangerButton = props => (
  <Button {...props} type={DANGER} />
)

export default Button