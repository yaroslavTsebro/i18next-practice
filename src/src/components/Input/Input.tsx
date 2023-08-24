import useInputAdv from "../../hooks/use-input-adv";
import "./Input.scss";

export interface Props {
  name: string;
  placeholder: string;
  validationMessages: string[];
  validations: Function[];
  commonClasses?: string;
  errorClasses?: string;
}

const Input = ({
  name,
  placeholder,
  validations,
  validationMessages,
  commonClasses,
  errorClasses,
}: Props) => {
  if (validations.length !== validationMessages.length) {
    throw new Error(
      "validations and validationMessages must have the same length"
    );
  }

  const [
    value,
    valueIsValid,
    isTouched,
    validation,
    valueChangeHandler,
    valueBlurHandler,
    resetValueInput,
  ] = useInputAdv(validations);

  const hasError = validation.includes(false) && isTouched;
  const classNames ="input__wrapper " + commonClasses + " " + (hasError ? errorClasses : "");

  return (
    <>
      <div className={classNames}>
        <label className="input__label" htmlFor={name}>
          {name}
        </label>
        <input
          type="text"
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={valueChangeHandler}
          onFocus={valueBlurHandler}
          className="input__field"
        />
        {validationMessages.map(
          (message, index) =>
            !validation[index] &&
            isTouched && (
              <p className="form__error" key={index}>
                {message}
              </p>
            )
        )}
      </div>
    </>
  );
};

export default Input;