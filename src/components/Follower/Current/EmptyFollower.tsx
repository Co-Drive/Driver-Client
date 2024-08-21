import styled from 'styled-components';
import { IcNothing } from '../../../assets';

const EmptyFollower = () => {
  const nickname = sessionStorage.getItem('nickname');
  const graphArr = Array.from({ length: 15 }, (_, idx) => idx);

  return (
    <EmptyFollowerContainer>
      <TextContainer>
        <Text>{nickname} 님은 팔로워가 아직 없어요</Text>
        <Text>팔로워를 추가하여 주간 문제 개수를 비교해보세요</Text>
      </TextContainer>

      <SubText>
        그룹 {'>'} 마음에 드는 그룹에 가입하여 팔로워를 추가해보세요
      </SubText>

      <GraphContainer>
        {graphArr.map((graph) => {
          return <IcNothing key={graph} />;
        })}
      </GraphContainer>
    </EmptyFollowerContainer>
  );
};

export default EmptyFollower;

const EmptyFollowerContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 5.2rem 3.6rem 1.4rem 3.5rem;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 2.4rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const SubText = styled.p`
  margin-bottom: 3rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;

const GraphContainer = styled.div`
  display: flex;
  gap: 1.8rem;
  justify-content: center;

  padding: 0 2.4rem;
`;
