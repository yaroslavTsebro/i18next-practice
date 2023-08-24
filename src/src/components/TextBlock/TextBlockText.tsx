import { ReactNode } from "react";
import "./index.scss";

export interface ComponentProps {
  children: ReactNode;
}

export interface ComponenClassesProps extends ComponentProps {
  className?: string;
}


export function TextBlockText({ children }: ComponentProps) {
  return <div className="text-block__text">{children}</div>;
}
