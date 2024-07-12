import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { signIn } from '../../../redux/users/operations';
import css from './signInForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const emailRegExp = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

const minPasswordLength = 8;
const maxPasswordLength = 112;

const loginSchema = Yup.object({
  email: Yup.string()
    .required('Email is required!')
    .matches(emailRegExp, 'Entered email address is not valid')
    .email('Please enter a valid email address!'),
  password: Yup.string()
    .required('Password is required!')
    .min(minPasswordLength, 'Too short')
    .max(maxPasswordLength, 'Too long'),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const onAddContact = values => {
    reset();
    console.log(values);
    // dispatch(signIn(values));

    // Розкомментити, коли буде правильно підключено апі
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = data => {
    console.log(data);
    onAddContact(data);
  };

  return (
    <div>
      {' '}
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
        <label>Password</label>
        <input {...register('password')} />
        <p>{errors.password?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignInForm;
