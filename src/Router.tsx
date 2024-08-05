import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FollowerCurrentPage from './page/FollowerCurrentPage';
import FollowerPage from './page/FollowerPage';
import GroupComplete from './page/GroupComplete';
import GroupCreate from './page/GroupCreate';
import GroupJoin from './page/GroupJoin';
import Home from './page/Home';
import LoginPage from './page/LoginPage';
import SolutionPage from './page/SolutionPage';
import SolvePage from './page/SolvePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/group" />
        <Route path="/group/:id" />
        <Route path="/group-new" element={<GroupCreate />} />
        <Route path="/my-group" />
        <Route path="/group-join" element={<GroupJoin />} />
        <Route path="/group-complete" element={<GroupComplete />} />
        <Route path="/solve" element={<SolvePage />} />
        <Route path="/solution/:id" element={<SolutionPage />} />
        <Route path="/follower" element={<FollowerCurrentPage />} />
        <Route path="/follower/:id" element={<FollowerPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
