import { useCallback } from "react";
import "./Switch.scss";
import i18n from "../../utils/i18n";
import i18next from "i18next";

export interface ClassProps {
  className?: string;
}

export function Switch({ className }: ClassProps) {
  const changeLanguage = useCallback((language: string) => {
    i18n.changeLanguage(language);
  }, []);

  const classes = "switch__input " + (className ? className : "");
  return (
    <div className="switch">
      <input
        type="checkbox"
        onChange={() => changeLanguage(i18next.language === "en" ? "ua" : "en")}
        className={classes}
        checked={i18next.language === 'ua'}
        id="switch"
      />
      <label className="switch__toggle" htmlFor="switch">
        Toggle
      </label>
    </div>
  );
}
