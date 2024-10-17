import styled from 'styled-components';

interface AlarmModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const AlarmModal = ({ isOpen, handleClose }: AlarmModalProps) => {
  const ModalList = {
    Test: [
      '새로운 알림이 왔습니다',
      '새로움 알림이 왔어요',
      '알림이 도착했어요',
    ],
  };

  const { Test } = ModalList;

  return (
    <>
      {isOpen && (
        <ModalContainer onMouseLeave={handleClose}>
          {Test.map((data) => {
            return <ModalTab key={data}>{data}</ModalTab>;
          })}
        </ModalContainer>
      )}
    </>
  );
};

export default AlarmModal;

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
