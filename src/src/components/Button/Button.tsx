import { ComponenClassesProps } from "../TextBlock/TextBlockText";
import "./Button.scss";

export function Button({ className, children }: ComponenClassesProps) {
  const classes = "button " + (className ? className : "");
  return <button className={classes}>{children}</button>;
}
