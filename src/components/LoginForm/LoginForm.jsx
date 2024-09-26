import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.formContainer}>
        <label htmlFor="email">Email</label>
        <Field className={css.input} type="email" name="email" />
        <label htmlFor="password">Password</label>
        <Field className={css.input} type="password" name="password" />
        <button className={css.buttonSubmit} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
