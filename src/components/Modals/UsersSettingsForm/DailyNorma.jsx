import css from './usersSettingsForm.module.css';

const DailyNorma = () => {
  return (
    <div>
      <ul className={css.apLabelName}>My daily norma</ul>
      <div>
        <li className={css.apText}>For woman:</li>
        <p className={css.apFormula}>V=(M*0,03)+(T*0,4)</p>
      </div>
      <div>
        <li className={css.apText}>For man:</li>
        <p className={css.apFormula}>V=(M*0,04)+(T*0,6)</p>
      </div>
      <p className={css.apRule}>
        <span className={css.apStar}>*</span> V is the volume of the water norm in liters per day, M is your body
        weight, T is the time of active sports, or another type of activity
        commensurate in terms of loads (in the absence of these, you must set 0)
      </p>
      <h4 className={css.apText}>! Active time in hours</h4>
    </div>
  );
};

export default DailyNorma;
