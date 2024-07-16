import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const TrackerPage = lazy(() => import('./pages/TrackerPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));

import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';

import './App.css';
import ModalsPage from './pages/ModalsPage.jsx';
import { refresh } from './redux/users/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserIsLoggedIn } from './redux/users/selectors.js';

function App() {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(selectUserIsLoggedIn);

  useEffect(() => {
    dispatch(refresh())
      .unwrap()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, [dispatch, isUserLoggedIn]);

  return (
    <>
      <SharedLayout>
        <Routes>
          {/* <Route
            path="/tracker"
            element={
              <PrivateRoute redirectTo="/signin">
                <TrackerPage />
              </PrivateRoute>
            }
          /> */}
          {/* <Route
            path="/signup"
            element={
              <RestrictedRoute redirectTo="/tracker">
              <SignUpPage />
              </RestrictedRoute>
            }
          /> */}

          {/* <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/tracker">
                <SignInPage />
              </RestrictedRoute>
            }
          /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/tracker" element={<TrackerPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </SharedLayout>
    </>
  );
}
export default App;
