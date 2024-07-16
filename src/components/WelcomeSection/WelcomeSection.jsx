import css from './WelcomeSection.module.css';

import CustomNavLink from '../REUSABLE/CustomNavLink/CustomNavLink';
import Logo from '../REUSABLE/Logo/Logo';
import clsx from 'clsx';

const WelcomeSection = () => {
  return (
    <div className={css.homePageWelcomeSection}>
      <Logo />
      <div className={css.homePageWelcomeSectionContainer}>
        <p className={css.homePageWelcomeSectionText}>
          Record daily water intake and track
        </p>
        <h1 className={css.homePageWelcomeSectionHeader}>
          Water consumption tracker
        </h1>
        <div className={css.homePageBtns}>
          <CustomNavLink
            className={clsx(css.homePageLinks, css.linkTracker)}
            to="/signup"
          >
            Try tracker
          </CustomNavLink>
          <CustomNavLink
            className={clsx(css.homePageLinks, css.linkSignIn)}
            to="/signin"
          >
            Sign In
          </CustomNavLink>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
