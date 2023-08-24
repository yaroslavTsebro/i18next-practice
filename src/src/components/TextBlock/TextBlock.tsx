import { ReactNode } from "react";
import "./index.scss";
import { ComponenClassesProps } from "./TextBlockText";

export function TextBlock({ children, className }: ComponenClassesProps) {
  const classes = "text-block " + className;
  return <div className={classes}>{children}</div>;
}
