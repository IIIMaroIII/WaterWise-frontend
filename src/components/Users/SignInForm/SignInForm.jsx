import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignInForm.module.css';

const SignInForm = () => {
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
    try {
      const response = await axios.post('/api/login', data);
      toast.success('Registration successful!');
      localStorage.setItem('token', response.data.token);
      navigate('/tracker');
    } catch (error) {
      toast.error('Somesing wron, try again later');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-form">
        <div className="form-section">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign In</h2>
            <div className="input-container">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register('email')}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="input-container">
              <label>Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                {...register('password')}
              />
              <span
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? '☆' : '☆'}
              </span>
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            <button type="submit">Sign In</button>
            <p>
              DonU+2019t have an account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
      <div className="image-section">
        <div
          style={{ width: '100%', height: '100%', backgroundColor: '#ccc' }}
        ></div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignInForm;
