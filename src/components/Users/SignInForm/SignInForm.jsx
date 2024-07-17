import css from '../SignInForm/signInForm.module.css';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { signIn } from 'src/redux/users/operations.js';
import { useDispatch } from 'react-redux';
import Button from 'src/components/REUSABLE/Button/Button';
import toast from 'react-hot-toast';

const SignInForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(3, 'Password must be at least 3 characters')
      .required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async data => {
    dispatch(signIn(data))
      .unwrap()
      .then(res => {
        toast.success(res.message);
        navigate('/tracker');
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.signInContainer}>
      <div className={css.signInForm}>
        <div className={css.formSection}>
          <form className={css.c} onSubmit={handleSubmit(onSubmit)}>
            {/* <h1> AquaTrack </h1> тут мусить бути перевикористовуване лого */}
            <h2>Sign In</h2>
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
            <Button type="submit" addClass={css.buttonSpanSignInForm}>
              Sign In
            </Button>
            <p>
              Don’t have an account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
        <div className={css.imageSection}></div>
      </div>
    </div>
  );
};

export default SignInForm;
