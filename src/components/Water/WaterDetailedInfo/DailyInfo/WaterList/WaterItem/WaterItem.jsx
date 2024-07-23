import Button from 'src/components/REUSABLE/Button/Button.jsx';
import css from './WaterItem.module.css';
import {
  changeDeleteWaterModalOpen,
  changeModal,
  changeWaterCardId,
  changeWaterModalEdit,
} from 'src/redux/water/slice';
import { useDispatch } from 'react-redux';
import sprite from 'src/assets/pictures/HomePage/sprite.svg';

import { CiLogin } from 'react-icons/ci';

const WaterItem = ({ item }) => {
  const dispatch = useDispatch();

  const date = new Date(item.date);
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const itemTime = date.toLocaleString('en-US', options);

  const checkVolume = () => {
    if (item.volume < 1000) return `${item.volume} ml`;
    if (item.volume > 1000) return `${item.volume} L`;
  };

  return (
    <>
      <svg className={css.iconGlass}>
        <use href={`${sprite}#icon-glass`}></use>
      </svg>
      <div className={css.wrapper}>
        <p className={css.volume}>{checkVolume()}</p>
        <Button
          addClass={css.button}
          onClick={() => {
            dispatch(changeWaterModalEdit(true));
            dispatch(changeModal(true));
            dispatch(changeWaterCardId(item._id));
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3335 2.00004C11.5086 1.82494 11.7165 1.68605 11.9452 1.59129C12.174 1.49653 12.4192 1.44775 12.6668 1.44775C12.9145 1.44775 13.1596 1.49653 13.3884 1.59129C13.6172 1.68605 13.8251 1.82494 14.0002 2.00004C14.1753 2.17513 14.3142 2.383 14.4089 2.61178C14.5037 2.84055 14.5524 3.08575 14.5524 3.33337C14.5524 3.58099 14.5037 3.82619 14.4089 4.05497C14.3142 4.28374 14.1753 4.49161 14.0002 4.6667L5.00016 13.6667L1.3335 14.6667L2.3335 11L11.3335 2.00004Z"
              stroke="#323F47"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* <svg className={css.icon}>
            <use href={`${sprite}#icon-pen`}></use>
          </svg> */}
        </Button>

        <p className={css.itemTime}>{itemTime}</p>
        <Button
          addClass={css.button}
          onClick={() => {
            dispatch(changeDeleteWaterModalOpen(true));
            dispatch(changeModal(true));
            dispatch(changeWaterCardId(item._id));
          }}
        >
          <svg className={css.icon}>
            <use href={`${sprite}#icon-trash`}></use>
          </svg>
        </Button>
      </div>
    </>
  );
};

export default WaterItem;
