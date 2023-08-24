import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Switch } from "../../components/Switch/Switch";
import { TextBlock } from "../../components/TextBlock/TextBlock";
import { TextBlockText } from "../../components/TextBlock/TextBlockText";
import { TextBlockTitle } from "../../components/TextBlock/TextBlockTitle";
import "./Login.scss";

export function Login() {
  const { t } = useTranslation("translation");
  return (
    <section className="login">
      <div className="login__container">
        <TextBlock className="login__info">
          <TextBlockTitle>{t("login.title")}</TextBlockTitle>
          <TextBlockText>{t("login.text")}</TextBlockText>
        </TextBlock>
        <div className="login__body">
          <form action="">
            <Input
              name={t("login.emailLabel")}
              placeholder={t("login.emailPlaceholder")}
              validationMessages={[t("login.emailValidationMessage")]}
              validations={[
                (val: string) => {
                  return val.includes("@");
                },
              ]}
            />
            <Input
              name={t("login.passwordLabel")}
              placeholder={t("login.passwordPlaceholder")}
              validationMessages={[t("login.passwordValidationMessage")]}
              validations={[
                (val: string) => {
                  return val.trim().length > 8;
                },
              ]}
            />
            <Button>{t("login.loginButton")}</Button>
          </form>
        </div>
        <Switch />
      </div>
    </section>
  );
}
