import WaterItem from './WaterItem/WaterItem.jsx';
import css from '../WaterList/WaterList.module.css';

const WaterList = () => {
  // const dailyItems = useSelector(selectWaterItems);
  const dailyItems = [
    { volume: '250ml', date: '7:00am', _id: 1 },
    { volume: '350ml', date: '10:00am', _id: 2 },
    { volume: '250ml', date: '7:00am', _id: 3 },
    { volume: '350ml', date: '10:00am', _id: 4 },
    { volume: '250ml', date: '7:00am', _id: 5 },
    { volume: '350ml', date: '10:00am', _id: 6 },
  ];

  return (
    <ul className={css.list}>
      {dailyItems.length === 0 ? (
        <p>You do not have any records!</p>
      ) : (
        dailyItems.map(item => {
          return (
            <li key={item._id} className={css.item}>
              <WaterItem item={item} />
            </li>
          );
        })
      )}
    </ul>
  );
};

export default WaterList;
