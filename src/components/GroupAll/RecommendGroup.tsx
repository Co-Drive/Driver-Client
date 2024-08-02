import styled from 'styled-components';
import { IcBtnInformation } from '../../assets';
import PageLayout from '../PageLayout/PageLayout';
import { RecommendGroupProps } from './../../types/GroupAll/GroupAllType';

const RecommendGroup = ({ user, group }: RecommendGroupProps) => {
  const handleClickCard = (id: number) => {
    /* 페이지 이동 */
  };

  return (
    <PageLayout category={'홈'}>
      <RecommendContainer>
        <Title>
          <Nickname>{user}</Nickname>님을 위한 오늘의 추천 그룹
          <Notic>
            <IcBtnInformation />
            <Tooltip>
              <TooUser>{user}</TooUser>님 만을 위해 <br /> 하루에 6개씩 랜덤으로
              그룹을 추천해드려요
            </Tooltip>
          </Notic>
        </Title>
        <GroupCardContainer>
          {group.map((card) => {
            const { nickname, imgSrc, profile, num, title, content, tags } =
              card;

            return (
              <CardContainer key={num} onClick={() => handleClickCard(num)}>
                <Img src={imgSrc} />
                <Info>
                  <CardHeader>
                    <UserImg src={profile} />
                    <TextId>
                      <Text>{nickname} 님</Text>
                      <Text>|</Text>
                      <p>{num} / 50명</p>
                    </TextId>
                  </CardHeader>
                  <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardContent>{content}</CardContent>
                  </CardBody>
                  <CardTags>
                    {tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </CardTags>
                </Info>
              </CardContainer>
            );
          })}
        </GroupCardContainer>
      </RecommendContainer>
    </PageLayout>
  );
};

const RecommendContainer = styled.article`
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.header`
  display: flex;
  align-items: center;

  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const Nickname = styled.p`
  margin-right: 0.4rem;

  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const Notic = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  margin-left: 2.5rem;

  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = styled.div`
  display: block;
  position: absolute;
  top: 157%;
  visibility: hidden;

  width: 22.8rem;
  height: auto;
  padding: 1.2rem 1.1rem;

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.body_ligth_12};

  white-space: nowrap;

  opacity: 0;
  transform: translate(-3%);
  transition: opacity 0.3s ease-in-out;

  &::after {
    position: absolute;
    bottom: 100%;
    left: 5%;

    margin-left: -0.1rem;

    border-color: transparent transparent ${({ theme }) => theme.colors.gray600};
    border-width: 5px;
    border-style: solid;
    content: '';
  }
`;

const TooUser = styled.p`
  display: inline-flex;

  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;

const GroupCardContainer = styled.article`
  display: grid;
  gap: 4rem 1.8rem;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
  max-height: 58.2rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 29.6rem;
  height: 31rem;
`;

const Img = styled.img`
  width: 100%;
  height: 17.8rem;

  border-radius: 1.6rem;
  background-color: white;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin: 1.2rem 1rem 0;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;

  padding-bottom: 1.2rem;
`;

const UserImg = styled.img`
  width: 2.1rem;
  height: 2.1rem;
  margin-right: 0.6rem;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray100};
`;

const TextId = styled.div`
  display: flex;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_medium_14};
`;

const Text = styled.p`
  margin-right: 1rem;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding-bottom: 2rem;
`;

const CardTitle = styled.h3`
  overflow: hidden;

  padding-bottom: 0.6rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};

  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CardContent = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_ligth_12};
  flex: 1;
`;

const CardTags = styled.div`
  display: flex;
  gap: 1rem;

  margin-top: auto;
`;

const Tag = styled.p`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
`;

export default RecommendGroup;
