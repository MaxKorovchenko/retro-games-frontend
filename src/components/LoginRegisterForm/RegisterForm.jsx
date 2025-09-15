import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RegisterSchema } from 'helpers/validationSchemas/registerSchema';
import { register } from 'myRedux/auth/operations';

import styles from './Form.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(register(values))
      .then(res => {
        if (res.meta.requestStatus === 'rejected') {
          throw new Error('Email already in use');
        }
        toast.info(`Welcome ${res.payload.user.name}`);
      })
      .catch(e => {
        toast.error(e.message);
      });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>REGISTER</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form} autoComplete="off">
          <label className={styles.label}>
            Username
            <Field className={styles.input} type="text" name="name" />
            <ErrorMessage
              className={styles.errorName}
              name="name"
              component="span"
            />
          </label>

          <label className={styles.label}>
            Email
            <Field className={styles.input} type="email" name="email" />
            <ErrorMessage
              className={styles.errorEmail}
              name="email"
              component="span"
            />
          </label>

          <label className={styles.label}>
            Password
            <Field className={styles.input} type="password" name="password" />
            <ErrorMessage
              className={styles.errorPassword}
              name="password"
              component="span"
            />
          </label>

          <button className={styles.btn} type="submit">
            CREATE ACCOUNT
          </button>

          <div className={styles.signWrapper}>
            <p className={styles.text}>Already have an account?</p>
            <Link to="/login" className={styles.link}>
              LogIn
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
