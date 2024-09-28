import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log("Login successful");
      })
      .catch(() => {
        console.log("Login error");
      });

    resetForm();
  };
  return (
    <Formik
      initialValues={{
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
