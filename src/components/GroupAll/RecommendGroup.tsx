import styled from 'styled-components';
import { IcBtnInformation } from '../../assets';
import { RecommendGroupProps } from './../../types/GroupAll/GroupAllType';
const RecommendGroup = ({ user, group = [] }: RecommendGroupProps) => {
  const handleClickCard = (id: number) => {
    /* 페이지 이동 */
  };

  return (
    <RecommendContainer>
      <Title>
        <Nickname>{user}</Nickname>님을 위한 오늘의 추천 그룹
        <IcBtnInformation />
      </Title>
      <GroupCardContainer>
        {group.map((card) => {
          const { nickname, imgSrc, profile, num, title, content, tags } = card;

          return (
            <CardContainer key={num} onClick={() => handleClickCard(num)}>
              <Img src={imgSrc} />
              <Info>
                <CardHeader>
                  <UserImg src={profile} />
                  <TextId>
                    <Text>{nickname} 님</Text>
                    <Divider>{num} / 50명</Divider>
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
  gap: 2rem;
  align-items: center;

  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.title_bold_24};
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
  width: 21px;
  height: 21px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray100};
`;

const TextId = styled.span`
  display: flex;

  margin-left: 0.6rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_medium_14};
`;

const Text = styled.span`
  padding-right: 10px;

  border-right: 1px solid #8b8e98;
`;

const Divider = styled.span`
  margin-left: 10px;
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
  font-weight: bold;

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

const Tag = styled.span`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
`;

export default RecommendGroup;
