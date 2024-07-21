import css from './signInForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { signIn } from 'src/redux/users/operations.js';
import Button from 'src/components/REUSABLE/Button/Button';
import Logo from 'src/components/REUSABLE/Logo/Logo';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection';
import CustomNavLink from 'src/components/REUSABLE/CustomNavLink/CustomNavLink';

const SignInForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async data => {
    dispatch(signIn(data))
      .unwrap()
      .then(res => {
        toast.success(res.message);
        reset();
        navigate('/tracker');
      })
      .catch(err => {
        toast.error('Email or password is incorrect, please try again!');
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.signInContainer}>
      <div className={css.signInForm}>
        <div className={css.formSection}>
          <Logo />
          <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={css.formTitle}>Sign In</h2>
            <div className={css.inputContainer}>
              <label className={css.formLabel}>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register('email')}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className={css.inputContainer}>
              <label className={css.formLabel}>Password</label>
              <div className={css.inputWrapper}>
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
              </div>
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <Button
              disabled={!isDirty || !isValid}
              addClass={css.btnform}
              type="submit"
            >
              Sign In
            </Button>
            <div className={css.spanSignIn}>
              <p>Don’t have an account? </p>
              <CustomNavLink addClass={css.link} to="/signup">
                Sign Up
              </CustomNavLink>
            </div>
          </form>
        </div>
        <div className={css.imageSection}>
          <AdvantagesSection />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
