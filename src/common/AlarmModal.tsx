import styled from 'styled-components';

interface AlarmModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const AlarmModal = ({ isOpen, handleClose }: AlarmModalProps) => {
  const ALARMLIST = {
    NewAlarms: [
      { groupName: '[그룹이름] ', message: '에 새로운 신청이 들어왔습니다' },
      { groupName: '[닉네임] ', message: '님이 회원님을 팔로우 했습니다' },
    ],
    ReadAlarms: [
      { groupName: '[그룹이름] ', message: '에 [닉네임] 님이 참여하였습니다' },
      { groupName: '[그룹이름] ', message: '에 새로운 신청이 들어왔습니다' },
    ],
  };

  const { NewAlarms, ReadAlarms } = ALARMLIST;

  return (
    <>
      {isOpen && (
        <ModalContainer onMouseLeave={handleClose}>
          <Section>
            <Title>새로운 알림</Title>
            {NewAlarms.map((data, idx) => {
              return (
                <ModalTab key={idx}>
                  <Highlight>{data.groupName}</Highlight>
                  {data.message}
                </ModalTab>
              );
            })}
          </Section>
          <Divider />
          <Section>
            <Title>읽음</Title>

            {ReadAlarms.map((data, idx) => {
              return (
                <ModalTab key={idx}>
                  <Highlight>{data.groupName}</Highlight>
                  {data.message}
                </ModalTab>
              );
            })}
          </Section>
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

const Section = styled.div`
  display: flex;
  flex-direction: column;
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
