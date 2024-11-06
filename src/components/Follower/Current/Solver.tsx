import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SolverProps } from '../../../types/Follower/Current/currentType';
import EmptySolver from './EmptySolver';

const Solver = ({ currentPage, users }: SolverProps) => {
  const navigate = useNavigate();
  const [slicedUsers, setSlicedUsers] = useState(
    users.length > 3 ? users.slice(0, 3) : users
  );

  if (users.length > 3) {
    useEffect(() => {
      setSlicedUsers(users.slice(currentPage * 3 - 3, currentPage * 3));
    }, [currentPage]);
  }

  const handleClickBtn = (userId: number) => {
    navigate(`/follower/${userId}`);
  };

  return (
    <>
      {users.length ? (
        <SolverContainer>
          {slicedUsers.map((solver) => {
            const { profileImg, nickname, userId } = solver;
            return (
              <SolverInfo key={nickname} onClick={() => handleClickBtn(userId)}>
                <ProfileImg src={profileImg} />
                <Nickname>{nickname}</Nickname>
              </SolverInfo>
            );
          })}
        </SolverContainer>
      ) : (
        <EmptySolver />
      )}
    </>
  );
};

export default Solver;

const SolverContainer = styled.article`
  display: flex;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 4rem 5.3rem 4rem 4rem;
`;

const SolverInfo = styled.div`
  display: flex;
  gap: 1.4rem;
  align-items: center;

  width: 100%;
  padding: 0.5rem 0 0.5rem 0.5rem;
`;

const ProfileImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  border-radius: 5rem;

  object-fit: cover;
  cursor: pointer;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_18};
  cursor: pointer;
`;
