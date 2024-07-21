import css from './WelcomeSection.module.css';

import CustomNavLink from '../REUSABLE/CustomNavLink/CustomNavLink';
import Logo from '../REUSABLE/Logo/Logo';
import clsx from 'clsx';
// import { selectUserIsLoggedIn } from '../../redux/users/selectors.js';
// import { useSelector } from 'react-redux';

const WelcomeSection = () => {
  return (
    <div className={clsx(css.homePageWelcomeSection)}>
      <Logo />
      <div className={clsx(css.homePageWelcomeSectionContainer)}>
        <p className={css.homePageWelcomeSectionText}>
          Record daily water intake and track
        </p>
        <h1 className={css.homePageWelcomeSectionHeader}>
          Water consumption tracker
        </h1>
        <ul className={css.homePageBtns}>
          <li>
            <CustomNavLink
              addClass={css.isActive}
              className={clsx(css.homePageLinks, css.linkTracker, {})}
              to="/signup"
            >
              Try tracker
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink
              className={clsx(css.homePageLinks, css.linkSignIn, {})}
              to="/signin"
            >
              Sign In
            </CustomNavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WelcomeSection;
