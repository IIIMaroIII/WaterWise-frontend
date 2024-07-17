import Navigation from 'src/components/Navigation/Navigation.jsx';
import SignUpForm from 'src/components/Users/SignUpForm/SignUpForm.jsx';
import UsersNav from 'src/components/Users/UsersNav/UsersNav.jsx';
import WelcomeSection from 'src/components/WelcomeSection/WelcomeSection';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection';
import css from './HomePage.module.css';
import Container from 'src/components/REUSABLE/Container/Container';

const HomePage = () => {
  return (
    <Container>
      <div className={css.homePageContainer}>
        <WelcomeSection />
        <AdvantagesSection />
        {/* <Navigation />
      <UsersNav />
      <SignUpForm /> */}
      </div>
    </Container>
  );
};

export default HomePage;
