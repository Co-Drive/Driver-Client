import styled from 'styled-components';
import PageLayout from '../components/PageLayout/PageLayout';

const FollowerPage = () => {
  return (
    <PageLayout category="홈">
      <FollowerPageContainer></FollowerPageContainer>
    </PageLayout>
  );
};

export default FollowerPage;

const FollowerPageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 8.6rem 25.7rem 20rem;
`;
