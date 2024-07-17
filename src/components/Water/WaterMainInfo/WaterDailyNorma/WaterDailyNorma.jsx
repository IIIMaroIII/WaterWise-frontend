import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/users/selectors';
import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  const user = useSelector(selectUser);
  return (
    <div className={css.daily_norma_wrapper}>
      <p>{!user ? null : user.dailyNorma}</p>
      <div>My water daily norma</div>
    </div>
  );
};

export default WaterDailyNorma;
