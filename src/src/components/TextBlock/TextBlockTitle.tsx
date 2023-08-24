import { ComponentProps } from "./TextBlockText";
import "./index.scss";

export function TextBlockTitle({ children }: ComponentProps) {
  return <div className="text-block__title">{children}</div>;
}
