import css from './signUpForm.module.css';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'src/components/REUSABLE/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { signUp } from 'src/redux/users/operations.js';
import Photo from './Rectangle 19.jpg'; 

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Repeat Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async data => {
    dispatch(signUp(data))
      .unwrap()
      .then(() => {
        toast.success('Registration successful!');
        navigate('/tracker');
      })
      .catch(err => {
        toast.error('There was an error during registration. Please try again.');
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.signUpContainer}>
      <div className={css.signUpForm}>
        <div className={css.formSection}>
          <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            {/* <Logo /> */}
            <h2>Sign Up</h2>
            <div className={css.inputContainer}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register('email')}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className={css.inputContainer}>
              <label>Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                {...register('password')}
              />
              <span
                className={css.togglePassword}
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className={css.inputContainer}>
              <label>Repeat password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Repeat password"
                {...register('repeatPassword')}
              />
              <span
                className={css.togglePassword}
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
              {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
            </div>
            <Button addClass={css.btnform}> Sign Up</Button>
            <p>
              Already have an account? <a href="/signin">Sign In</a>
            </p>
          </form>
        </div>
        <div className={css.imageSection}>
          <img src={Photo} alt="photo" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUpForm;
