import { Suspense } from 'react';
import Loader from '../REUSABLE/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import MainModal from '../Modals/Modal/MainModal.jsx';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Toaster />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <MainModal></MainModal>
    </>
  );
};

export default SharedLayout;
