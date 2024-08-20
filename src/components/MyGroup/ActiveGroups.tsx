import { useRef, useState } from 'react';
import styled from 'styled-components';
import { IcArrowLeftFill, IcArrowRightFill } from '../../assets';
import { ActiveGroupProps } from '../../types/MyGroup/myGroupType';

const ActiveGroups = ({ totalActiveGroups }: ActiveGroupProps) => {
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

  const handleClickItem = (id: number) => {
    console.log('click!', id);
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
            const { id, tags, title, contents } = group;
            return (
              <Group key={id} onClick={() => handleClickItem(id)}>
                <TagContainer>
                  {tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </TagContainer>
                <Title>{title}</Title>
                <Introduce>{contents}</Introduce>
              </Group>
            );
          })}
        </GroupContainer>

        {!isLastPage && <IcArrowRightFill onClick={nextSlide} />}
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
  background-color: #333;
  color: #fff;
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
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_ligth_10};
`;