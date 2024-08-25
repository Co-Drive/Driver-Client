import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import GroupInfo from '../components/GroupDetail/GroupInfo';
import Header from '../components/GroupDetail/Header';
import PageLayout from '../components/PageLayout/PageLayout';
import useGetDetail from '../libs/hooks/GroupDetail/useGetDetail';
import usePostPublicRequest from '../libs/hooks/GroupDetail/usePostPublicRequest';

const GroupDetail = () => {
  const { id } = useParams();
  if (!id) return;

  const { data, isLoading } = useGetDetail(parseInt(id));
  const { mutation, isSuccess } = usePostPublicRequest();
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

  const handleClickApplyBtn = () => {
    mutation(parseInt(id));
  };

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

          {!isSuccess && (
            <ApplyBtn type="button" onClick={handleClickApplyBtn}>
              신청하기
            </ApplyBtn>
          )}
        </GroupDetailContainer>
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
  width: 61.2rem;
  height: 36.8rem;
  margin-bottom: 2.4rem;
  margin-left: 0.1rem;

  border-radius: 1.6rem;

  object-fit: cover;
`;

const ApplyBtn = styled.button`
  position: fixed;
  top: 84.4rem;
  left: 48.3rem;

  padding: 1.8rem 19.5rem;

  box-shadow: rgb(183 255 199 / 70%) 0 0 1.5rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
  color: ${({ theme }) => theme.colors.gray900};
  ${({ theme }) => theme.fonts.title_bold_24};
`;
