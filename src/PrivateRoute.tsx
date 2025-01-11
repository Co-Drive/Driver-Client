import { Outlet } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import LoginPage from './page/LoginPage';

const PrivateRoute = ({ exception }: { exception?: boolean }) => {
  const isLogin = sessionStorage.getItem('token');

  if (!isLogin) {
    return exception ? <LandingPage /> : <LoginPage />;
  }

  return <Outlet />;
};
export default PrivateRoute;
