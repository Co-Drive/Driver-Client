import { useState } from 'react';
import styled from 'styled-components';
import ModalPortal from '../common/Modal/ModalPortal';

const TestPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleClose = () => {
    setIsOpenModal(false);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const ModalList = {
    Test: [
      '새로운 알림이 왔습니다',
      '새로움 알림이 왔어요',
      '알림이 도착했어요',
    ],
  };

  const { Test } = ModalList;

  return (
    <Container>
      <button onClick={handleOpenModal}>ComeOn</button>
      {isOpenModal && (
        <ModalPortal>
          <ModalContainer onClick={handleClose}>
            {Test.map((data) => {
              return <ModalTab key={data}>{data}</ModalTab>;
            })}
          </ModalContainer>
        </ModalPortal>
      )}
    </Container>
  );
};

export default TestPage;

const Container = styled.div`
  display: flex;
  justify-content: center;

  background-color: pink;
`;

const ModalContainer = styled.ul`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  flex-direction: column;
`;

const ModalTab = styled.li`
  width: 100%;

  background-color: blue;

  text-align: center;
`;
