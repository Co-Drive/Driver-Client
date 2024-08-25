// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FOLLOWER_DUMMY } from '../../../constants/Follower/followerConst';

const ParticipatingGroup = () => {
  const { group } = FOLLOWER_DUMMY;

  const nickname = sessionStorage.getItem('nickname');
  // 라우팅 정의 후, 콘솔은 지우고 navigate 코드로 변경할 예정입니다 !!
  //   const navigate = useNavigate();
  const handleClickCard = (id: number) => {
    console.log(id);
    // navigate(`/group/${id}`);
  };

  return (
    <ParticipatingCardContainer>
      <TitleContainer>
        <Nickname>{nickname}</Nickname>
        <Title>님의 참여 그룹</Title>
      </TitleContainer>

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

  width: 100%;
  margin-top: 9.8rem;
  margin-left: 0.2rem;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  margin-left: 0.1rem;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const GroupContainer = styled.article`
  display: grid;
  gap: 4rem 1.8rem;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
  height: 58.2rem;
  overflow-y: auto;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;

  min-width: 29.6rem;

  width: 100%;
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
