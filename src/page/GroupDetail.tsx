import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ErrorModal from '../common/Modal/ErrorModal/ErrorModal';
import GroupInfo from '../components/GroupDetail/GroupInfo';
import Header from '../components/GroupDetail/Header';
import PageLayout from '../components/PageLayout/PageLayout';
import useGetDetail from '../libs/hooks/GroupDetail/useGetDetail';
import useGetGroupId from '../libs/hooks/GroupDetail/useGetGroupId';
import usePostPublicRequest from '../libs/hooks/GroupDetail/usePostPublicRequest';
import LoadingPage from './LoadingPage';

const GroupDetail = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const { disabledApply } = state ? state : { disabledApply: false };
  const { id } = useParams();
  if (!id) return;
  const isUuid = id?.includes('-');

  const { groupDataFromUuid, isGroupDataLoading } = isUuid
    ? useGetGroupId(id)
    : { groupDataFromUuid: null, isGroupDataLoading: false };
  const uuidToRoomId =
    isUuid && !isGroupDataLoading && groupDataFromUuid.data.roomId;
  const finalRoomId = isUuid ? uuidToRoomId : parseInt(id);
  const { data, isLoading } = useGetDetail(finalRoomId);

  const {
    title,
    owner,
    imageSrc,
    requestedCount,
    capacity,
    tags,
    introduce,
    information,
    isMember,
  } = !isLoading && data.data;
  const { isPublicRoom } = state || (!isLoading && data.data);
  const { mutation, err } = usePostPublicRequest(imageSrc);
  const isError = err.length > 0;

  const [onErrModal, setOnErrModal] = useState(isError);

  const handleClickApplyBtn = () => {
    mutation(parseInt(id));
  };

  const { scrollY } = useScroll();
  const scrollAnimation = useAnimation();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    if (maxScroll - 252 <= latest) {
      scrollAnimation.start({
        marginBottom: '25.2rem',
        transition: { duration: 0 },
      });
    } else {
      scrollAnimation.start({ marginBottom: 0, transition: { duration: 0 } });
    }
  });

  useEffect(() => {
    const isLogin =
      sessionStorage.getItem('user') &&
      sessionStorage.getItem('language') !== '사용언어';

    if (isLogin) {
      if (!isLoading && !isPublicRoom && !disabledApply && !isMember)
        navigate(`/group-join`, { state: { roomId: id } });
    } else {
      navigate(`/login`, { state: { roomId: id } });
    }
  }, [isLoading]);

  useEffect(() => {
    setOnErrModal(isError);
  }, [isError]);

  return (
    <PageLayout category="그룹">
      {isLoading ? (
        <LoadingPage isPageLoading={true} />
      ) : (
        <GroupDetailContainer>
          <Header title={title} tags={tags} />
          <GroupImg src={imageSrc} alt="그룹 대표 이미지" />
          <GroupInfo
            id={parseInt(id)}
            owner={owner}
            requestedCount={requestedCount}
            capacity={capacity}
            introduce={introduce}
            information={information}
          />

          {!disabledApply && !isMember && (
            <motion.div
              initial={{ position: 'fixed', bottom: '11.2rem', left: 0 }}
              style={{
                display: 'flex',
                justifyContent: 'center',

                width: '100%',
              }}
              animate={scrollAnimation}
            >
              <ApplyBtn type="button" onClick={handleClickApplyBtn}>
                신청하기
              </ApplyBtn>
            </motion.div>
          )}
        </GroupDetailContainer>
      )}
      {onErrModal && (
        <ErrorModal onClose={() => setOnErrModal(false)} errMsg={err} />
      )}
    </PageLayout>
  );
};

export default GroupDetail;

const GroupDetailContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;

  width: 61.3rem;
  margin: 6.4rem 0 33.2rem;
`;

const GroupImg = styled.img`
  min-width: 61.2rem;

  width: 100%;
  height: 36.8rem;
  margin-bottom: 2.4rem;
  margin-left: 0.1rem;

  border-radius: 1.6rem;

  object-fit: cover;
`;

const ApplyBtn = styled.button`
  width: 47.4rem;
  padding: 1.8rem 19.5rem;

  box-shadow: rgb(183 255 199 / 70%) 0 0 1.5rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
  color: ${({ theme }) => theme.colors.gray900};
  ${({ theme }) => theme.fonts.title_bold_24};
`;
