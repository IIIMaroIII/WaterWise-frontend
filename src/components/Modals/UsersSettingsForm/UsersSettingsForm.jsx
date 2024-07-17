import css from './usersSettingsForm.module.css';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import axios from 'axios';
import DailyNorma from './DailyNorma';
import userSettingSchema from 'src/Validation/Modals/UserSettingSchema.js';

const UsersSettingsForm = ({ isOpen, onClose, onUpdate }) => {
  const [preview, setPreview] = useState(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userSettingSchema),
    defaultValues: {
      gender: 'woman',
    },
  });

  const onSubmit = async data => {
    try {
      const formData = new FormData();
      formData.append('avatar', data.avatar[0]);
      formData.append('gender', data.gender);
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('weight', data.weight);
      formData.append('activeTime', data.activeTime);
      formData.append('waterIntake', data.waterIntake);

      const response = await axios.post('/api/user/update', formData);

      onUpdate(response.data);
      onClose();
      reset();
    } catch (error) {
      alert('Failed to update user data: ' + error.message);
    }
  };

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
  };
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <container>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <button
            className={css.apButtonCancel}
            type="button"
            onClick={onClose}
          >
            x
          </button>
          <div>
            <label className={css.apText}>Upload a photo</label>
            <input
              type="file"
              {...register('avatar')}
              onChange={handleAvatarChange}
            />
            {errors.avatar && <p>{errors.avatar.message}</p>}
            {preview && <img src={preview} alt="Avatar Preview" />}
          </div>
          <div>
            <label className={css.apLabelName}>Your gender identity</label>
            <br />
            <label className={css.apText}>
              <input type="radio" value="woman" {...register('gender')} /> Woman
            </label>
            <label className={css.apText}>
              <input type="radio" value="man" {...register('gender')} /> Man
            </label>
            {errors.gender && <p>{errors.gender.message}</p>}
          </div>
          <div>
            <label className={css.apLabelName}>Your name</label>
            <br />
            <input className={css.apFrame} type="text" {...register('name')} />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div>
            <label className={css.apLabelName}>Email</label>
            <br />
            <input
              className={css.apFrame}
              type="email"
              {...register('email')}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <DailyNorma />
          </div>
          <div>
            <label className={css.apText}>Your weight in kilograms:</label>
            <br />
            <input
              className={css.apFrame}
              type="number"
              {...register('weight')}
            />
            {errors.weight && <p>{errors.weight.message}</p>}
          </div>
          <div>
            <label className={css.apText}>
              The time of active participation in sports:
            </label>
            <br />
            <input
              className={css.apFrame}
              type="number"
              {...register('activeTime')}
            />
            {errors.activeTime && <p>{errors.activeTime.message}</p>}
          </div>
          <div>
            <label className={css.apText}>
              The required amount of water in liters per day:
            </label>
            <br />
            <input
              className={css.apAmount}
              type="number"
              {...register('waterIntake')}
            />
            {errors.waterIntake && <p>{errors.waterIntake.message}</p>}
          </div>
          <div>
            <label>Write down how much water you will drink:</label>
            <br />
            <input
              className={css.apFrame}
              type="number"
              {...register('waterIntake')}
            />
            {errors.waterIntake && <p>{errors.waterIntake.message}</p>}
          </div>

          <button className={css.apButton} type="submit">
            Save
          </button>
        </form>
      </div>
    </container>
  );
};
export default UsersSettingsForm;
