import { Calendar } from './Calendar/Calendar';
import { CalendarPagination } from './CalendarPagination/CalendarPagination';
import sprite from '../../../../assets/pictures/HomePage/sprite.svg';
import css from './MonthInfo.module.css';
import ChartComponent from 'src/components/Statistics/ChartComponent';
import { setShowChart } from 'src/redux/chart/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MonthInfo = () => {
  const dispatch = useDispatch();
  const showChart = useSelector(state => state.chart.showChart);
  const navigate = useNavigate();

  const handleIconClick = () => {
    const newShowChart = !showChart;
    dispatch(setShowChart(newShowChart));
    if (newShowChart) {
      navigate('/tracker/statistics');
    } else {
      navigate('/tracker');
    }
  };

  return (
    <>
      <div className={css.wrapper}>
        {showChart ? (
          <h3 className={css.month}>Statistics</h3>
        ) : (
          <h3 className={css.month}>Month</h3>
        )}
        <div className={css.paginationWrapper}>
          <CalendarPagination />
          <svg
            className={css.monthInfoIcon}
            width="20"
            height="20"
            onClick={handleIconClick}
            style={{ cursor: 'pointer' }}
          >
            <use href={`${sprite}#icon-pie-chart-02`}></use>
          </svg>
        </div>
      </div>
      {showChart ? <ChartComponent /> : <Calendar />}
    </>
  );
};

export default MonthInfo;
