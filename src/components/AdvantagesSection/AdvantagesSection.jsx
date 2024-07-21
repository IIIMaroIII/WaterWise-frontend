import css from './AdvantagesSection.module.css';
import sprite from '../../assets/pictures/HomePage/sprite.svg';
import CustomNavLink from '../REUSABLE/CustomNavLink/CustomNavLink';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserIsLoggedIn } from 'src/redux/users/selectors';
import { IMAGES } from '../../components/Constants/constants.js';
import { setShowChart } from '../../redux/chart/slice.js';

const AdvantagesSection = ({ onOpenModal }) => {
  const isAuthenticated = useSelector(selectUserIsLoggedIn);
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(setShowChart(true));
  };

  return (
    <div className={css.homePageAdvantagesSection}>
      <div className={css.homePageCustomers}>
        <div className={css.homePageCustomersPhotoContainer}>
          <picture>
            <source
              srcSet={`${IMAGES.firstUser1x} 1x, ${IMAGES.firstUser2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${IMAGES.firstUserMob1x} 1x, ${IMAGES.firstUserMob2x} 2x`}
              media="(max-width: 767px)"
            />
            <img
              src={IMAGES.firstUser1x}
              className={css.homePageCustomersPhoto}
              alt="First user"
              width="47"
              height="47"
            />
          </picture>
          <picture>
            <source
              srcSet={`${IMAGES.secondUser1x} 1x, ${IMAGES.secondUser2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${IMAGES.secondUserMob1x} 1x, ${IMAGES.secondUserMob2x} 2x`}
              media="(max-width: 767px)"
            />
            <img
              src={IMAGES.secondUser1x}
              className={clsx(css.homePageCustomersPhoto, css.secondUserPhoto)}
              alt="Second user"
              width="47"
              height="47"
            />
          </picture>
          <picture>
            <source
              srcSet={`${IMAGES.thirdUser1x} 1x, ${IMAGES.thirdUser2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${IMAGES.thirdUserMob1x} 1x, ${IMAGES.thirdUserMob2x} 2x`}
              media="(max-width: 767px)"
            />
            <img
              src={IMAGES.thirdUser1x}
              className={clsx(css.homePageCustomersPhoto, css.thirdUserPhoto)}
              alt="Third user"
              width="47"
              height="47"
            />
          </picture>
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
          {isAuthenticated ? (
            <CustomNavLink
              className={clsx(
                css.homePageBenefitsLinks,
                css.homePageBenefitsLinksHabitDrive,
              )}
              to="/tracker"
            >
              <svg className={css.homePageBenefitsIcon} width="8" height="8">
                <use href={`${sprite}#icon-Ellipse-13`}></use>
              </svg>
              Habit drive
            </CustomNavLink>
          ) : (
            <div
              className={clsx(
                css.homePageBenefitsLinks,
                css.homePageBenefitsLinksHabitDrive,
              )}
            >
              <svg className={css.homePageBenefitsIcon} width="8" height="8">
                <use href={`${sprite}#icon-Ellipse-13`}></use>
              </svg>
              Habit drive
            </div>
          )}
        </li>
        <li
          className={clsx(
            css.homePageBenefitsItems,
            css.homePageBenefitsItemsStatistics,
          )}
        >
          {isAuthenticated ? (
            <CustomNavLink
              className={clsx(
                css.homePageBenefitsLinks,
                css.homePageBenefitsLinksStatistics,
              )}
              to="/tracker/statistics"
              onClick={handleLinkClick}
            >
              View statistics
            </CustomNavLink>
          ) : (
            <div
              className={clsx(
                css.homePageBenefitsLinks,
                css.homePageBenefitsLinksStatistics,
              )}
            >
              View statistics
            </div>
          )}
        </li>
        <li
          className={clsx(
            css.homePageBenefitsItems,
            css.homePageBenefitsItemsSettings,
          )}
          onClick={onOpenModal}
        >
          Personal rate setting
        </li>
      </ul>
    </div>
  );
};

export default AdvantagesSection;
