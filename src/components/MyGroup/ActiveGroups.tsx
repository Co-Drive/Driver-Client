import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcArrowLeftFill, IcArrowRightFill } from '../../assets';
import { ClickCardProps } from '../../types/Follower/Personal/personalType';
import { ActiveGroupProps } from '../../types/MyGroup/myGroupType';

const ActiveGroups = ({ totalActiveGroups }: ActiveGroupProps) => {
  const navigate = useNavigate();
  const currentPageRef = useRef(0);
  const isFirstPage = currentPageRef.current === 0;
  const isLastPage = currentPageRef.current === totalActiveGroups.length - 4;

  const [slicedGroups, setSlicedGroups] = useState(
    totalActiveGroups.slice(0, 4)
  );

  const updateTotalActiveGroups = () => {
    setSlicedGroups(
      totalActiveGroups.slice(
        currentPageRef.current,
        currentPageRef.current + 4
      )
    );
  };

  const nextSlide = () => {
    currentPageRef.current += 4;
    updateTotalActiveGroups();
  };

  const prevSlide = () => {
    currentPageRef.current -= 4;
    updateTotalActiveGroups();
  };

  const handleClickCard = ({
    groupId,
    userId,
    isMember,
    isPublicRoom,
  }: ClickCardProps) => {
    const myId = sessionStorage.getItem('user');
    if (myId && parseInt(myId) === userId) {
      navigate(`/group/${groupId}/admin`);
    } else {
      isMember
        ? navigate(`/group/${groupId}/member`)
        : navigate(`/group/${groupId}`, {
            state: { isPublicRoom: isPublicRoom },
          });
    }
  };

  return (
    <ActiveGroupContainer>
      <Header>
        <MainTitle>최근 활동 중인 그룹</MainTitle>
      </Header>

      <CarouselContainer>
        {!isFirstPage && <IcArrowLeftFill onClick={prevSlide} />}

        <GroupContainer $isFirstPage={isFirstPage} $isLastPage={isLastPage}>
          {slicedGroups.map((group) => {
            const {
              roomId,
              tags,
              title,
              introduce,
              ownerId,
              isMember,
              isPublicRoom,
            } = group;
            const allTag = ['ALL'];
            const languageTags = tags.length > 5 ? allTag : tags;
            return (
              <Group
                key={roomId}
                onClick={() =>
                  handleClickCard({
                    groupId: roomId,
                    userId: ownerId,
                    isMember,
                    isPublicRoom,
                  })
                }
              >
                <TagContainer>
                  {languageTags.slice(0, 3).map((tag, tagIndex) => (
                    <Tag key={tagIndex}>#{tag}</Tag>
                  ))}
                </TagContainer>
                <Title>{title}</Title>
                <Introduce>{introduce}</Introduce>
              </Group>
            );
          })}
        </GroupContainer>

        {!isLastPage && slicedGroups.length === 4 && (
          <IcArrowRightFill onClick={nextSlide} />
        )}
      </CarouselContainer>
    </ActiveGroupContainer>
  );
};

export default ActiveGroups;

const ActiveGroupContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;

  width: 100%;
  margin-bottom: 7rem;
`;

const Header = styled.header`
  width: 100%;
  padding-left: 4.4rem;
  margin-bottom: 3rem;
`;

const MainTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const CarouselContainer = styled.div`
  display: flex;
  gap: 1.8rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const GroupContainer = styled.div<{
  $isFirstPage: boolean;
  $isLastPage: boolean;
}>`
  display: flex;
  gap: 1.1rem;
  justify-content: center;
  align-items: center;

  padding-right: ${({ $isLastPage }) => $isLastPage && `4.2rem`};
  padding-left: ${({ $isFirstPage }) => $isFirstPage && `4.2rem`};
`;

const Group = styled.div`
  width: 22.3rem;
  height: 14.5rem;
  padding: 2.2rem 1.8rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const TagContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Tag = styled.p`
  margin-bottom: 1.5rem;

  color: ${({ theme }) => theme.colors.codrive_purple};

  ${({ theme }) => theme.fonts.body_eng_medium_12};
`;

const Title = styled.div`
  height: 3.4rem;
  margin-bottom: 1.4rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_14};
`;

const Introduce = styled.div`
  display: -webkit-box;
  overflow: hidden;

  color: ${({ theme }) => theme.colors.gray300};

  ${({ theme }) => theme.fonts.body_ligth_10};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;
`;
