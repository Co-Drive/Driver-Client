import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './common/ErrorBoundary';
import TotalSolutions from './components/Follower/Personal/TotalSolutions';
import AdminPage from './page/AdminPage';
import FollowerCurrentPage from './page/FollowerCurrentPage';
import FollowerPage from './page/FollowerPage';
import GroupAllPage from './page/GroupAllPage';
import GroupComplete from './page/GroupComplete';
import GroupCreate from './page/GroupCreate';
import GroupDetail from './page/GroupDetail';
import GroupEdit from './page/GroupEdit';
import GroupJoin from './page/GroupJoin';
import GroupMemberPage from './page/GroupMemberPage';
import Home from './page/Home';
import LoginLoadingPage from './page/LoginLoadingPage';
import LoginPage from './page/LoginPage';
import MyGroup from './page/MyGroup';
import MyProfilePage from './page/MyProfilePage';
import RegisterPage from './page/RegisterPage';
import SolutionListPage from './page/SolutionListPage';
import SolutionPage from './page/SolutionPage';
import SolvePage from './page/SolvePage';
import PrivateRoute from './PrivateRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset}>
            <Routes>
              <Route element={<PrivateRoute exception={true} />}>
                <Route path="/" element={<Home />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route path="/:id" element={<MyProfilePage />} />
                <Route path="/group" element={<GroupAllPage />} />
                <Route path="/group/:id" element={<GroupDetail />} />
                <Route path="/group/:id/admin" element={<AdminPage />} />
                <Route path="/group/:id/member" element={<GroupMemberPage />} />
                <Route path="/group-new" element={<GroupCreate />} />
                <Route path="/my-group" element={<MyGroup />} />
                <Route path="/group-join" element={<GroupJoin />} />
                <Route path="/group-complete" element={<GroupComplete />} />
                <Route path="/group-complete/:id" element={<GroupComplete />} />
                <Route path="/solve" element={<SolvePage />} />
                <Route path="/solution" element={<SolutionListPage />} />
                <Route path="/follower" element={<FollowerCurrentPage />} />
                <Route path="/follower/:id" element={<FollowerPage />} />
                <Route
                  path="/follower/:id/total"
                  element={<TotalSolutions />}
                />
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/oauth/github/callback"
                  element={<LoginLoadingPage />}
                />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/group-all" element={<GroupAllPage />} />
                <Route path="/group/:id/edit" element={<GroupEdit />} />
              </Route>

              <Route path="/solution/:id" element={<SolutionPage />} />
            </Routes>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </BrowserRouter>
  );
};

export default Router;
