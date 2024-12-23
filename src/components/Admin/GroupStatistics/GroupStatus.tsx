import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  IcArrowBottomWhite,
  IcArrowTopWhite,
  IcStatusBlack,
  IcStatusWhite,
  IcSuccess,
  IcSuccessGray,
} from '../../../assets';
import ErrorModal from '../../../common/Modal/ErrorModal/ErrorModal';
import WarningModal from '../../../common/Modal/WarningModal/WarningModal';
import { STATUS } from '../../../constants/Follower/currentConst';
import usePatchRoomStatus from '../../../libs/hooks/Admin/usePatchRoomStatus';

interface GroupStatusProps {
  roomId: number;
  modalOn: boolean;
  clickedStatus: string;
  onClose: () => void;
  handleClickStatus: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const GroupStatus = ({
  roomId,
  modalOn,
  clickedStatus,
  onClose,
  handleClickStatus,
}: GroupStatusProps) => {
  const { mutation, patchRoomErr } = usePatchRoomStatus();
  const isError = patchRoomErr.length > 0;

  const [openStatusOption, setOpenStatusOption] = useState(false);
  const [errModalOn, setErrModalOn] = useState(isError);

  const handleClickSelector = () => {
    setOpenStatusOption(!openStatusOption);
  };

  const handleClickModalBtn = () => {
    mutation({ roomId, status: clickedStatus });
    onClose();
  };

  useEffect(() => {
    setErrModalOn(isError);
  }, [isError, clickedStatus]);

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

      {!isError && modalOn && (
        <WarningModal
          onClose={onClose}
          handleClickContinueBtn={handleClickModalBtn}
          data={clickedStatus}
          isGroupStatusModal={true}
        />
      )}

      {errModalOn && (
        <ErrorModal
          onClose={() => setErrModalOn(false)}
          errMsg={patchRoomErr}
        />
      )}
    </GroupStatusContainer>
  );
};

export default GroupStatus;

const GroupStatusContainer = styled.article`
  display: flex;
  flex-direction: column;

  margin-right: 7.6rem;
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

  white-space: nowrap;
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

  white-space: nowrap;
`;
