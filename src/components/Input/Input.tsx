export type InputProps = {
  type: string;
  placeholder: string;
  name: string;
};

const Input = (props: InputProps) => {
  return <input {...props} />;
};

export default Input;
