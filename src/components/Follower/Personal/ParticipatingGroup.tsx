// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ParticipatingGroupProps } from '../../../types/Follower/Personal/personalType';

const ParticipatingGroup = ({ group }: ParticipatingGroupProps) => {
  // 라우팅 정의 후, 콘솔은 지우고 navigate 코드로 변경할 예정입니다 !!
  //   const navigate = useNavigate();
  const handleClickCard = (id: number) => {
    console.log(id);
    // navigate(`/group/${id}`);
  };

  return (
    <ParticipatingCardContainer>
      <Title>참여 그룹</Title>

      <GroupContainer>
        {group.map((card) => {
          const { id, imgSrc, title, tags, introduce } = card;

          return (
            <CardContainer key={id} onClick={() => handleClickCard(id)}>
              <Img src={imgSrc} />
              <Contents>
                <Name>{title}</Name>
                <TagContainer>
                  {tags.map((tag) => {
                    return <Tag key={tag}>{tag}</Tag>;
                  })}
                </TagContainer>
                <Introduce>{introduce}</Introduce>
              </Contents>
            </CardContainer>
          );
        })}
      </GroupContainer>
    </ParticipatingCardContainer>
  );
};

export default ParticipatingGroup;

const ParticipatingCardContainer = styled.article`
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const GroupContainer = styled.article`
  display: grid;
  gap: 4rem 1.8rem;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;

  max-height: 58.2rem;
  overflow-y: auto;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;

  width: 29.6rem;
  height: 27.1rem;
`;

const Img = styled.img`
  width: 100%;
  height: 17.8rem;

  border-radius: 1.6rem;
  background-color: white;
  object-fit: cover;
`;

const Contents = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  flex-direction: column;

  width: calc(100% - 2rem);
  margin: 0 1rem;
`;

const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const TagContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Tag = styled.p`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
`;

const Introduce = styled.p`
  overflow: hidden;

  width: 100%;
  height: 2.8rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_ligth_12};

  white-space: pre-wrap;
  word-break: break-all;
`;
