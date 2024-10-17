import styled from 'styled-components';
import { ALARMLIST } from '../constants/Alarm/alarm';
import { AlarmModalProps } from '../types/Alarm/alarmType';

const AlarmModal = ({ isOpen, handleClose }: AlarmModalProps) => {
  const { NEWALARMS, READALARMS } = ALARMLIST;

  return (
    <>
      {isOpen && (
        <ModalContainer onMouseLeave={handleClose}>
          <Title>새로운 알림</Title>
          {NEWALARMS.map((data, idx) => {
            return (
              <ModalTab key={idx}>
                <Highlight>{data.groupName}</Highlight>
                {data.message}
              </ModalTab>
            );
          })}
          <Divider />
          <Title>읽음</Title>
          {READALARMS.map((data, idx) => {
            return (
              <ModalTab key={idx}>
                <Highlight>{data.groupName}</Highlight>
                {data.message}
              </ModalTab>
            );
          })}
        </ModalContainer>
      )}
    </>
  );
};

export default AlarmModal;

const ModalContainer = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 3rem;
  right: -2rem;

  width: 36.4rem;
  padding: 2.2rem 2.2rem 1.8rem 2rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.gray600};
`;

const ModalTab = styled.li`
  width: 100%;
  padding: 1.1rem 1rem 1.1rem 0;
  ${({ theme }) => theme.fonts.title_regular_14};

  color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.p`
  margin-bottom: 0.8rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.detail_regular_12};
`;

const Divider = styled.div`
  width: calc(100% + 4.2rem); /* ModalContainer의 100% 너비에 4.2rem 추가 */
  height: 0.1rem;
  margin: 1.2rem -2rem;

  background-color: ${({ theme }) => theme.colors.gray500};
`;

const Highlight = styled.span`
  ${({ theme }) => theme.fonts.title_semiBold_14};
  color: ${({ theme }) => theme.colors.white};
`;
