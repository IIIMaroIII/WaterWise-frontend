import Button from 'src/components/REUSABLE/Button/Button.jsx';
import css from './WaterItem.module.css';
import {
  changeDeleteWaterModalOpen,
  changeModal,
  changeWaterModalEdit,
} from 'src/redux/water/slice';
import { useDispatch } from 'react-redux';
import sprite from 'src/assets/pictures/HomePage/sprite.svg';

const WaterItem = ({ item }) => {
  const dispatch = useDispatch();

  const date = new Date(item.date);
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const itemTime = date.toLocaleString('en-US', options);

  const checkVolume = volume => {
    if (volume < 1000) return `${volume} ml`;
    if (volume > 1000) return `${volume} L`;
  };

  return (
    <>
      <svg className={css.iconGlass}>
        <use href={`${sprite}#icon-glass`}></use>
      </svg>
      <div className={css.wrapper}>
        <p className={css.volume}>{checkVolume(item.volume)}</p>
        <Button
          addClass={css.button}
          onClick={() => {
            dispatch(changeWaterModalEdit(true));
            dispatch(changeModal(true));
          }}
        >
          <svg className={css.icon}>
            <use href={`${sprite}#icon-pen`}></use>
          </svg>
        </Button>

        <p className={css.itemTime}>{itemTime}</p>
        <Button
          addClass={css.button}
          onClick={() => {
            dispatch(changeDeleteWaterModalOpen(true));
            dispatch(changeModal(true));
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
