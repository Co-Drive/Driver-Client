import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcSecretBigWhite } from '../assets';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import PageLayout from '../components/PageLayout/PageLayout';
import useGetDetail from '../libs/hooks/GroupDetail/useGetDetail';
import useGetGroupId from '../libs/hooks/GroupDetail/useGetGroupId';
import usePostAnswer from '../libs/hooks/GroupJoin/usePostAnswer';
import LoadingPage from './LoadingPage';

const GroupJoin = () => {
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isNotMatchedPW, setIsNotMatchedPW] = useState(false);
  const { state } = useLocation();
  const { roomId, notNavigateDetail } = state || {};
  const isUuid = roomId?.includes('-');
  const navigate = useNavigate();

  const { groupDataFromUuid, isGroupDataLoading } = isUuid
    ? useGetGroupId(roomId)
    : { groupDataFromUuid: null, isGroupDataLoading: false };
  const uuidToRoomId =
    isUuid && !isGroupDataLoading && groupDataFromUuid.data.roomId;
  const finalRoomId = isUuid ? uuidToRoomId : roomId;
  const { data, isLoading } = useGetDetail(finalRoomId);

  const { mutation, isMutationLoading } = usePostAnswer(finalRoomId);
  const isPageLoading = isLoading || isMutationLoading;

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    setIsActive(value.length > 0);
    setIsNotMatchedPW(false); // 비밀번호가 틀렸다고 표시된 상태 초기화
  };

  const handleJoinButton = () => {
    mutation({ roomId: finalRoomId, password: password });
  };

  useEffect(() => {
    if (!notNavigateDetail) {
      const { isMember, isPublicRoom } = !isLoading && data.data;
      if (isMember || isPublicRoom) {
        navigate(`/group/${finalRoomId}`, {
          state: { isMember: isMember, isPublicRoom: isPublicRoom },
        });
      }
    }
  }, [isLoading, notNavigateDetail]);

  return (
    <PageLayout category={'group'}>
      {isPageLoading ? (
        <LoadingPage isPageLoading={true} />
      ) : (
        <>
          <IconContainer>
            <IcSecretBigWhite />
          </IconContainer>
          <Text>비밀그룹 참여하기</Text>
          <CommonInputContainer>
            <CommonInput
              category="password"
              value={password}
              handleChangeInputs={handleChangeInputs}
              isNotMatchedPW={isNotMatchedPW}
            />
          </CommonInputContainer>
          <CommonButton
            category="group_join"
            isActive={isActive}
            onClick={handleJoinButton}
          />
        </>
      )}
    </PageLayout>
  );
};

export default GroupJoin;

const IconContainer = styled.div`
  margin-top: 12.9rem;
  margin-bottom: 1rem;
`;

const CommonInputContainer = styled.div`
  margin-top: 4.2rem;
  margin-bottom: 4.4rem;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.title_bold_24}
  color: ${({ theme }) => theme.colors.white}
`;
