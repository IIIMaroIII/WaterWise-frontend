import css from './userSettingsForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'src/components/REUSABLE/Button/Button';
import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/users/selectors.js';
import { useDispatch } from 'react-redux';
import userSettingsFormValidation from 'src/Validation/Forms/userSettingsForm';
import { BsExclamationLg } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { useState } from 'react';
import { update } from 'src/redux/users/operations.js';
import { changeModal } from 'src/redux/water/slice.js';
import toast from 'react-hot-toast';

const UsersSettingsForm = () => {
  const dispatch = useDispatch();
  const [photoPreview, setPhotoPreview] = useState(null);

  const user = useSelector(selectUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(userSettingsFormValidation),
    defaultValues: {
      gender: 'woman',
      weight: 50,
      email: user.email,
      waterIntake: 0,
      activeTime: 0,
    },
  });

  let waterAmount = watch('waterIntake', '');

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append('photoUrl', data.photoUrl[0]);
    formData.append('gender', data.gender);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('weight', data.weight);
    formData.append('activeTime', data.activeTime);
    formData.append('waterIntake', data.waterIntake);

    dispatch(update(formData))
      .unwrap()
      .then(() => {
        toast.success('You have successfully updated your profile!');
        dispatch(changeModal(false));
        reset();
      });
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={css.settingsForm}>
        <div className={css.photoUrlWrapper}>
          {/* <img
            className={css.photoUrl}
            src={'src/assets/pictures/userImg.png'}
            alt="photoUrl Preview"
          /> */}
          {photoPreview ? (
            <img
              className={css.photoUrl}
              src={photoPreview}
              alt="Photo Preview"
            />
          ) : (
            <img
              className={css.photoUrl}
              src={'src/assets/pictures/userImg.png'}
              alt="Default Preview"
            />
          )}
          <div className={css.fileWrapper}>
            {/* <input
              className={css.file}
              type="file"
              name="file"
              {...register('photoUrl')}
            /> */}
            <div className={css.uploadPhotoBtnContainer}>
              <Button addClass={css.uploadPhoto}>
                <FiLogOut className={css.logOutIcon} />
                <p>Upload a photo</p>
                <input
                  className={css.file}
                  type="file"
                  name="file"
                  {...register('photoUrl')}
                  onChange={handleFileChange}
                />
              </Button>
            </div>
          </div>
        </div>
        {errors.photoUrl && <p>{errors.photoUrl.message}</p>}
        <div>
          <p
            className={`${css.apLabelName} ${css.boldLabel} ${css.genderTextTitle}`}
          >
            Your gender identity
          </p>
          <label className={css.genderTextLabel}>
            <input
              type="radio"
              name="gender"
              value="woman"
              {...register('gender')}
            />
            Woman
          </label>
          <label className={css.genderTextLabel}>
            <input
              type="radio"
              name="gender"
              value="man"
              {...register('gender')}
            />
            Man
          </label>
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>
        <div className={css.settingsFormContainer}>
          <div className={css.firstFormContainer}>
            <div>
              <label className={`${css.apLabelName} ${css.boldLabel}`}>
                Your name
                <input
                  className={css.apFrame}
                  type="text"
                  {...register('name')}
                />
              </label>
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
              <label className={`${css.apLabelName} ${css.boldLabel}`}>
                Email
                <input
                  className={css.apFrame}
                  type="email"
                  {...register('email')}
                />
              </label>
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className={css.dailyNormaWrapper}>
              <p className={css.dailyNormaTitle}>My daily norma</p>
              <div className={css.dailyNormaByGender}>
                <div className={css.dailyNormaByGenderItem}>
                  <p>For woman:</p>
                  <p className={css.accent}>V=(M*0,03) + (T*0,4)</p>
                </div>
                <div className={css.dailyNormaByGenderItem}>
                  <p>For man:</p>
                  <p className={css.accent}>V=(M*0,04) + (T*0,6)</p>
                </div>
              </div>
              <p className={`${css.apFrame} ${css.textInstruction}`}>
                <span className={css.accent}>*</span> V is the volume of the
                water norm in liters per day, M is your body weight, T is the
                time of active sports, or another type of activity commensurate
                in terms of loads (in the absence of these, you must set 0)
              </p>
              <div className={css.exclamatoryTextContainer}>
                <BsExclamationLg className={css.exclamation} />
                <p className={css.exclamatoryText}>Active time in hours</p>
              </div>
            </div>
          </div>
          <div className={css.secondFormContainer}>
            <div>
              <label className={css.apLabelName}>
                Your weight in kilograms:
                <input
                  className={css.apFrame}
                  type="number"
                  {...register('weight')}
                />
              </label>
              {errors.weight && <p>{errors.weight.message}</p>}
            </div>
            <div>
              <label className={css.apLabelName}>
                The time of active participation in sports:
                <input
                  className={css.apFrame}
                  type="number"
                  {...register('activeTime')}
                />
              </label>
              {errors.activeTime && <p>{errors.activeTime.message}</p>}
            </div>
            <div>
              <p className={`${css.apText} ${css.reqWaterText}`}>
                The required amount of water in liters per day:{' '}
                <span className={css.accent}>
                  {waterAmount ? waterAmount : 1.8}L
                </span>
              </p>
              {errors.waterIntake && <p>{errors.waterIntake.message}</p>}
            </div>
            <div>
              <label className={`${css.apLabelName} ${css.boldLabel}`}>
                Write down how much water you will drink:
                <input
                  className={css.apFrame}
                  step="0.1"
                  type="number"
                  {...register('waterIntake')}
                />
              </label>
              {errors.waterIntake && <p>{errors.waterIntake.message}</p>}
            </div>
          </div>
        </div>
        <Button addClass={css.saveButton} type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};
export default UsersSettingsForm;
