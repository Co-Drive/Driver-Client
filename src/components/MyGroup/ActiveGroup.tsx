import { useState } from 'react';
import styled from 'styled-components';
import { IcArrowLeftFill, IcArrowRightFill } from '../../assets';
import { ActiveGroupProps } from '../../types/MyGroup/myGroupType';

const ActiveGroup = ({ item }: ActiveGroupProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(item.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleClickItem = (id: number) => {
    console.log('click!', id);
  };

  return (
    <ActiveGroupContainer>
      <MainTitle>최근 활동 중인 그룹</MainTitle>

      <CarouselContainer>
        <CarouselButton $isHidden={currentSlide === 0} onClick={prevSlide}>
          <IcArrowLeftFill />
        </CarouselButton>
        <CarouselWrapper>
          <CarouselContent $currentSlide={currentSlide}>
            {Array.from({ length: totalPages }, (_, index) => (
              <CarouselSlide key={index}>
                {item
                  .slice(
                    index * itemsPerPage,
                    index * itemsPerPage + itemsPerPage
                  )
                  .map((card) => {
                    const { id, tags, title, contents } = card;
                    return (
                      <CarouselItem
                        key={id}
                        onClick={() => handleClickItem(id)}
                      >
                        <TagContainer>
                          {tags.map((tag, tagIndex) => (
                            <Tag key={tagIndex}>{tag}</Tag>
                          ))}
                        </TagContainer>
                        <Title>{title}</Title>
                        <Introduce>{contents}</Introduce>
                      </CarouselItem>
                    );
                  })}
              </CarouselSlide>
            ))}
          </CarouselContent>
        </CarouselWrapper>

        <CarouselButton onClick={nextSlide}>
          <IcArrowRightFill />
        </CarouselButton>
      </CarouselContainer>
    </ActiveGroupContainer>
  );
};

export default ActiveGroup;

const ActiveGroupContainer = styled.div`
  width: 100%;
  max-width: 99.8rem;

  margin: 0 auto;
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  width: 99.8rem;
  margin: 0 auto;
`;

const MainTitle = styled.p`
  margin-bottom: 3rem;
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const CarouselWrapper = styled.div`
  overflow: hidden;

  width: 100%;
`;

const CarouselContent = styled.div<{ $currentSlide: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${({ $currentSlide }) => `translateX(-${$currentSlide * 100}%)`};
`;

const CarouselSlide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

  width: 100%;
`;

const CarouselItem = styled.div`
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

const CarouselButton = styled.button<{ $isHidden?: boolean }>`
  visibility: ${({ $isHidden }) => ($isHidden ? 'hidden' : 'visible')};
`;
