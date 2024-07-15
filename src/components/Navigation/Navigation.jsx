import css from './navigation.module.css';

import CustomNavLink from '../REUSABLE/CustomNavLink/CustomNavLink';

const Navigation = () => {
  return (
    <nav className={css.wrapper}>
      <CustomNavLink to="/">Logo</CustomNavLink>
      <CustomNavLink to="/tracker">Tracker</CustomNavLink>
      <CustomNavLink to="/modals">Modals</CustomNavLink>
    </nav>
  );
};

export default Navigation;
