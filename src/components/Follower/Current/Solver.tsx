import { useEffect, useState } from 'react';
import styled from 'styled-components';
import EmptySolver from './EmptySolver';

interface SolverProps {
  currentPage: number;
  users: Array<{ userId: number; nickname: string; profileImg: string }>;
}

const Solver = ({ currentPage, users }: SolverProps) => {
  const [slicedUsers, setSlicedUsers] = useState(users.slice(0, 3));

  useEffect(() => {
    setSlicedUsers(users.slice(currentPage * 3 - 3, currentPage * 3));
  }, [currentPage]);

  return (
    <>
      {users.length ? (
        <SolverContainer>
          {slicedUsers.map((solver) => {
            const { userId, profileImg, nickname } = solver;
            return (
              <SolverInfo key={userId}>
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
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_18};
`;
