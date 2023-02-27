import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import FormikInput from "../../components/FormikInput/FormikInput";
import FormikRadio from "../../components/FormikRadio/FormikRadio";
import { createJobType } from "../../types/jobs";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  type: Yup.string().required("Required"),
  starting_from: Yup.string().required("Required"),
  has_drivers_license: Yup.boolean().required("Required"),
});

const JobsForm = () => {
  const handleSubmit = (values: createJobType) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
          price: 0,
          type: "fullTime",
          starting_from: "",
          has_drivers_license: true,
          user_id: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <FormikInput type="text" name="title" placeholder="Title" />
            <FormikInput
              type="text"
              name="description"
              placeholder="Description"
            />
            <FormikInput type="number" name="price" placeholder="Salary" />
            <FormikInput
              type="text"
              name="starting_from"
              placeholder="Starting From"
            />
            <FormikRadio
              title="Driver's license required"
              name="has_drivers_license"
              trueLabel="Yes"
              falseLabel="No"
            />
            <FormikRadio
              title="Job type"
              name="type"
              options={[
                { value: "fullTime", label: "Full-time" },
                { value: "partTime", label: "Part-Time" },
                { value: "freelance", label: "Freelance" },
              ]}
            />

            <Button type="submit">Create</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default JobsForm;
