import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const ErrorBoundary = lazy(() => import('./common/ErrorBoundary'));
const LoadingPage = lazy(() => import('./page/LoadingPage'));
const LoginLoadingPage = lazy(() => import('./page/LoginLoadingPage'));
const LoginPage = lazy(() => import('./page/LoginPage'));
const TotalSolutions = lazy(
  () => import('./components/Follower/Personal/TotalSolutions')
);
const AdminPage = lazy(() => import('./page/AdminPage'));
const FollowerCurrentPage = lazy(() => import('./page/FollowerCurrentPage'));
const FollowerPage = lazy(() => import('./page/FollowerPage'));
const GroupAllPage = lazy(() => import('./page/GroupAllPage'));
const GroupComplete = lazy(() => import('./page/GroupComplete'));
const GroupCreate = lazy(() => import('./page/GroupCreate'));
const GroupDetail = lazy(() => import('./page/GroupDetail'));
const GroupEdit = lazy(() => import('./page/GroupEdit'));
const GroupJoin = lazy(() => import('./page/GroupJoin'));
const GroupMemberPage = lazy(() => import('./page/GroupMemberPage'));
const MyGroup = lazy(() => import('./page/MyGroup'));
const MyProfilePage = lazy(() => import('./page/MyProfilePage'));
const RegisterPage = lazy(() => import('./page/RegisterPage'));
const SolutionListPage = lazy(() => import('./page/SolutionListPage'));
const SolvePage = lazy(() => import('./page/SolvePage'));
const SolutionPage = lazy(() => import('./page/SolutionPage'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));
const Home = lazy(() => import('./page/Home'));

const Router = () => {
  return (
    <BrowserRouter>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset}>
            <Suspense fallback={<LoadingPage />}>
              <Routes>
                <Route element={<PrivateRoute exception={true} />}>
                  <Route path="/" element={<Home />} />
                </Route>

                <Route element={<PrivateRoute />}>
                  <Route path="/:id" element={<MyProfilePage />} />
                  <Route path="/group" element={<GroupAllPage />} />
                  <Route path="/group/:id/admin" element={<AdminPage />} />
                  <Route
                    path="/group/:id/member"
                    element={<GroupMemberPage />}
                  />
                  <Route path="/group-new" element={<GroupCreate />} />
                  <Route path="/my-group" element={<MyGroup />} />
                  <Route path="/group-join" element={<GroupJoin />} />
                  <Route path="/group-complete" element={<GroupComplete />} />
                  <Route
                    path="/group-complete/:id"
                    element={<GroupComplete />}
                  />
                  <Route path="/solve" element={<SolvePage />} />
                  <Route path="/solution" element={<SolutionListPage />} />
                  <Route path="/follower" element={<FollowerCurrentPage />} />
                  <Route path="/follower/:id" element={<FollowerPage />} />
                  <Route
                    path="/follower/:id/total"
                    element={<TotalSolutions />}
                  />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/group-all" element={<GroupAllPage />} />
                  <Route path="/group/:id/edit" element={<GroupEdit />} />
                </Route>

                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/oauth/github/callback"
                  element={<LoginLoadingPage />}
                />
                <Route path="/group/:id" element={<GroupDetail />} />
                <Route path="/solution/:id" element={<SolutionPage />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </BrowserRouter>
  );
};

export default Router;
