import styled from 'styled-components';
import { RecommendCardProps } from '../types/GroupAll/RecommendCardType';

const RecommendCard = ({ group }: RecommendCardProps) => {
  const handleClickCard = (id: number) => {
    /* 페이지 이동 */

    // 추후 수정해주세요 !!
    console.log(id);
  };

  return (
    <RecommendCardContainer>
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
    </RecommendCardContainer>
  );
};

const RecommendCardContainer = styled.article`
  display: grid;
  gap: 4rem 1.8rem;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
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

  height: 8.7rem;

  flex: 1;
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

  height: 5.3rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_ligth_12};
  flex: 1;
`;

const CardTags = styled.div`
  display: flex;
  gap: 1rem;

  padding-top: 2rem;
`;

const Tag = styled.p`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
`;

export default RecommendCard;
