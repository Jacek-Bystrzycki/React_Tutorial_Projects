import { ReactElement } from 'react';
import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitButton } from '../components';
import { UserRoutes } from '../types';

const Register = (): ReactElement => {
  return (
    <section className="h-screen grid place-items-center">
      <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput {...{ label: 'username', type: 'text', name: 'username' }} />
        <FormInput {...{ label: 'e-mail', type: 'email', name: 'email' }} />
        <FormInput {...{ label: 'password', type: 'password', name: 'password' }} />
        <div className="mt-4">
          <SubmitButton text="register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link to={UserRoutes.login} className="ml-2 link link-primary link-hover capitalize">
            login
          </Link>
        </p>
        <p className="text-center">
          <Link to={UserRoutes.root} className="link link-hover link-secondary capitalize">
            go back home
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
