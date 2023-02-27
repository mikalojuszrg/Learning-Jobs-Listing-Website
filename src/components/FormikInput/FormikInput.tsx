import { Field, ErrorMessage } from "formik";
import Input, { InputProps } from "../Input/Input";

const FormikInput = (props: InputProps) => {
  return (
    <div>
      <Field as={Input} {...props} />
      <ErrorMessage component="div" {...props} />
    </div>
  );
};

export default FormikInput;
