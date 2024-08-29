import { useState } from 'react';
import styled from 'styled-components';
import {
  IcArrowBottomWhite,
  IcArrowTopWhite,
  IcStatusBlack,
  IcStatusWhite,
  IcSuccess,
  IcSuccessGray,
} from '../../../assets';
import { STATUS } from '../../../constants/Follower/currentConst';

interface GroupStatusProps {
  clickedStatus: string;
  handleClickStatus: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const GroupStatus = ({
  clickedStatus,
  handleClickStatus,
}: GroupStatusProps) => {
  const [openStatusOption, setOpenStatusOption] = useState(false);

  const handleClickSelector = () => {
    setOpenStatusOption(!openStatusOption);
  };

  return (
    <GroupStatusContainer>
      <CurrentStatusContainer>
        <Title>그룹 상태</Title>
        <StatusContainer type="button">
          <Status $status={clickedStatus}>
            {clickedStatus === '모집 중' ? (
              <IcStatusBlack />
            ) : (
              <IcStatusWhite />
            )}
            <Text $status={clickedStatus}>{clickedStatus}</Text>
          </Status>
        </StatusContainer>
      </CurrentStatusContainer>

      <ChangeStatusSelector onClick={handleClickSelector}>
        <ChangeStatusText>그룹 상태 변경하기</ChangeStatusText>
        {openStatusOption ? <IcArrowTopWhite /> : <IcArrowBottomWhite />}
        {openStatusOption && (
          <StatusOption>
            {STATUS.map((status) => {
              return (
                <StatusContainer
                  key={status}
                  type="button"
                  onClick={(e) => handleClickStatus(e)}
                >
                  {clickedStatus === status ? <IcSuccess /> : <IcSuccessGray />}

                  <Status $status={status}>
                    {status === '모집 중' ? (
                      <IcStatusBlack />
                    ) : (
                      <IcStatusWhite />
                    )}
                    <Text $status={status}>{status}</Text>
                  </Status>
                </StatusContainer>
              );
            })}
          </StatusOption>
        )}
      </ChangeStatusSelector>
    </GroupStatusContainer>
  );
};

export default GroupStatus;

const GroupStatusContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-right: 7.8rem;
`;

const CurrentStatusContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;

  width: 100%;
  padding-bottom: 1rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray700};
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.title_bold_14};
`;

const ChangeStatusSelector = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  position: relative;

  padding: 1.05rem 1.2rem 1.05rem 1.4rem;
  margin-top: 1rem;

  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const ChangeStatusText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_regular_14};
`;

const StatusOption = styled.div`
  display: flex;
  gap: 1.4rem;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  position: absolute;
  top: 5rem;
  left: 0;

  width: 100%;
  padding: 1.8rem 1.2rem;

  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const StatusContainer = styled.button`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;
`;

const Status = styled.div<{ $status: string }>`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;

  padding: 0.7rem 1.4rem 0.7rem 1.2rem;

  border-radius: 0.6rem;
  background-color: ${({ $status, theme }) => {
    switch ($status) {
      case '모집 중':
        return `${theme.colors.codrive_green}`;
      case '모집 마감':
        return `${theme.colors.codrive_purple}`;
      case '활동 종료':
        return `${theme.colors.gray600}`;
    }
  }};
`;

const Text = styled.p<{ $status: string }>`
  color: ${({ $status, theme }) =>
    $status === '모집 중' ? theme.colors.gray900 : theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_14};
`;
