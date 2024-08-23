import styled from 'styled-components';
import GroupInfo from '../components/GroupDetail/GroupInfo';
import Header from '../components/GroupDetail/Header';
import PageLayout from '../components/PageLayout/PageLayout';

const GroupDetail = () => {
  return (
    <PageLayout category="그룹">
      <GroupDetailContainer>
        <Header />
        <GroupImg src="https://blog.kakaocdn.net/dn/cYnypO/btrzcSaVpNa/VwDfLj2yOWZDKpAhZIlYJ1/img.jpg" />
        <GroupInfo />
      </GroupDetailContainer>
    </PageLayout>
  );
};

export default GroupDetail;

const GroupDetailContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

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
