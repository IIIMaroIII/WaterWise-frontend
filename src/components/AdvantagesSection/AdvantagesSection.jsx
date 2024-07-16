import css from './AdvantagesSection.module.css';
import sprite from '../../assets/pictures/HomePage/sprite.svg';
import CustomNavLink from '../REUSABLE/CustomNavLink/CustomNavLink';
import clsx from 'clsx';
import firstUser from '../../assets//pictures/HomePage/user-first-mob.jpg';
import secondUser from '../../assets//pictures/HomePage/user-second-mob.jpg';
import thirdUser from '../../assets//pictures/HomePage/user-third-mob.jpg';

const AdvantagesSection = () => {
  return (
    <div className={css.homePageAdvantagesSection}>
      <div className={css.homePageCustomers}>
        <div className={css.homePageCustomersPhotoContainer}>
          <img
            src={firstUser}
            className={css.homePageCustomersPhoto}
            alt=""
            width="47"
            height="47"
          />
          <img
            src={secondUser}
            className={clsx(css.homePageCustomersPhoto, css.secondUserPhoto)}
            alt=""
            width="47"
            height="47"
          />
          <img
            src={thirdUser}
            className={clsx(css.homePageCustomersPhoto, css.thirdUserPhoto)}
            alt=""
            width="47"
            height="47"
          />
        </div>
        <div>
          Our <span className={css.homePageCustomersSpan}>happy</span> customers
        </div>
      </div>
      <ul className={css.homePageBenefits}>
        <li
          className={clsx(
            css.homePageBenefitsItems,
            css.homePageBenefitsItemsHabitDrive,
          )}
        >
          <CustomNavLink
            className={clsx(
              css.homePageBenefitsLinks,
              css.homePageBenefitsLinksHabitDrive,
            )}
            to="/tracker"
          >
            <svg className={css.homePageBenefitsIcon} width="8" height="8">
              <use href={`${sprite}#icon-Ellipse-13`}></use>{' '}
            </svg>
            Habit drive
          </CustomNavLink>
          {/* <div>Habit drive</div> */}
        </li>
        <li
          className={clsx(
            css.homePageBenefitsItems,
            css.homePageBenefitsItemsStatistics,
          )}
        >
          <CustomNavLink
            className={clsx(
              css.homePageBenefitsLinks,
              css.homePageBenefitsLinksStatistics,
            )}
            to="/tracker"
          >
            View statistics
          </CustomNavLink>
        </li>
        <li
          className={clsx(
            css.homePageBenefitsItems,
            css.homePageBenefitsItemsSettings,
          )}
        >
          Personal rate setting
        </li>
      </ul>
    </div>
  );
};

export default AdvantagesSection;
