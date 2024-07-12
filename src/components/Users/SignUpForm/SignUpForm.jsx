import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { signUp } from '../../../redux/users/operations';
import css from './signUpForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const emailRegExp = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

const minNameLength = 3;
const maxNameLength = 50;
const minPasswordLength = 8;
const maxPasswordLength = 112;

const registrationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(minNameLength, 'Too short!')
    .max(maxNameLength, 'Too long!'),
  email: Yup.string()
    .required('Email is required!')
    .matches(emailRegExp, 'Entered email address is not valid')
    .email('Please enter a valid email address!'),
  password: Yup.string()
    .required('Password is required!')
    .min(minPasswordLength, 'Too short')
    .max(maxPasswordLength, 'Too long'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  const onRegisterAccount = values => {
    reset();
    console.log(values);
    // dispatch(signUp(values));

    // Розкомментити, коли буде правильний апі
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });
  const onSubmit = data => {
    console.log(data);
    onRegisterAccount(data);
  };

  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
        <label>Password</label>
        <input {...register('password')} />
        <p>{errors.password?.message}</p>
        <label>Confirm Password</label>
        <input type="password" {...register('confirmPassword')} />
        <p>{errors.confirmPassword?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignUpForm;
