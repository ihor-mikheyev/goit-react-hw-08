import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        username: values.username,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
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
        <label htmlFor="username">Username</label>
        <Field className={css.input} type="text" name="username" />
        <label htmlFor="email">Email</label>
        <Field className={css.input} type="email" name="email" />
        <label htmlFor="password">Password</label>
        <Field className={css.input} type="password" name="password" />
        <button className={css.buttonSubmit} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
