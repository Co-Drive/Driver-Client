import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ErrorModal from '../common/Modal/ErrorModal/ErrorModal';
import GroupInfo from '../components/GroupDetail/GroupInfo';
import Header from '../components/GroupDetail/Header';
import PageLayout from '../components/PageLayout/PageLayout';
import useGetDetail from '../libs/hooks/GroupDetail/useGetDetail';
import usePostPublicRequest from '../libs/hooks/GroupDetail/usePostPublicRequest';

const GroupDetail = () => {
  const { state } = useLocation();
  const { disabledApply } = state ? state : { disabledApply: false };
  const { id } = useParams();
  if (!id) return;

  const { data, isLoading } = useGetDetail(parseInt(id));
  const {
    title,
    owner,
    imageSrc,
    requestedCount,
    capacity,
    tags,
    introduce,
    information,
  } = !isLoading && data.data;
  const { mutation, err } = usePostPublicRequest(imageSrc);

  const isError = err.length > 0;

  const [onErrModal, setOnErrModal] = useState(isError);

  const handleClickApplyBtn = () => {
    mutation(parseInt(id));
  };

  useEffect(() => {
    setOnErrModal(isError);
  }, [isError]);

  return (
    <PageLayout category="그룹">
      {!isLoading && (
        <GroupDetailContainer>
          <Header title={title} tags={tags} />
          <GroupImg src={imageSrc} />
          <GroupInfo
            id={parseInt(id)}
            owner={owner}
            requestedCount={requestedCount}
            capacity={capacity}
            introduce={introduce}
            information={information}
          />

          {!disabledApply && (
            <ApplyBtn type="button" onClick={handleClickApplyBtn}>
              신청하기
            </ApplyBtn>
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

  width: 100%;
  padding: 6.4rem 41.4rem 23.2rem;
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
  position: fixed;
  right: 48.3rem;
  bottom: 11.5rem;
  left: 48.3rem;

  padding: 1.8rem 19.5rem;

  box-shadow: rgb(183 255 199 / 70%) 0 0 1.5rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
  color: ${({ theme }) => theme.colors.gray900};
  ${({ theme }) => theme.fonts.title_bold_24};
`;
