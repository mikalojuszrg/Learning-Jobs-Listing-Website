import { Field } from "formik";

type Option = {
  value: string;
  label: string;
};

type FormikRadioProps = {
  title: string;
  name: string;
  trueLabel?: string;
  falseLabel?: string;
  options?: Option[];
};

const FormikRadio = ({
  title,
  name,
  trueLabel = "True",
  falseLabel = "False",
  options = [],
}: FormikRadioProps) => {
  const renderRadioButtons = () => {
    if (options.length > 0) {
      return options.map((option) => (
        <label key={option.value}>
          <Field type="radio" name={name} value={option.value} />
          {option.label}
        </label>
      ));
    }
    return (
      <>
        <label>
          <Field type="radio" name={name} value="true" />
          {trueLabel}
        </label>
        <label>
          <Field type="radio" name={name} value="false" />
          {falseLabel}
        </label>
      </>
    );
  };

  return (
    <div>
      <div id="my-radio-group">{title}</div>
      <div role="group" aria-labelledby="my-radio-group">
        {renderRadioButtons()}
      </div>
    </div>
  );
};

export default FormikRadio;
