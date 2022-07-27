import { diffProps } from "@react-three/fiber/dist/declarations/src/core/utils";
import { FC, ReactNode } from "react";

type Props = {
  variant?: "contained" | "outlined" | "text" | "disabled";
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "full";
  children?: ReactNode;
};

const Button: FC<Props> = (props) => {
  let style = "px-5 py-3 text-base rounded-full";
  if (props.variant == "text") {
    style += " text-primary";
  } else if (props.variant == "contained") {
    style += " text-on-primary bg-primary";
  }

  switch (props.size) {
    case "full":
      style += " w-full";
      break;
    default:
      style += " w-fit";
  }

  return <button className={style}> {props.children} </button>;
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
  size: "md",
};
export default Button;
