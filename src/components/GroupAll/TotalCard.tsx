import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  IcArrowLeftFill,
  IcArrowRightFill,
  IcArrowRightSmallGray,
} from '../../assets';

interface TotalCardProps {
  item: Array<{
    id: number;
    title: string;
    contents: string;
    tags: Array<string>;
  }>;
}

const TotalCard = ({ item = [] }: TotalCardProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [items, setItems] = useState(item);

  useEffect(() => {
    const dummyItems = [
      {
        id: 0,
        tags: ['#javascript', '#kotlin', '#kotlin'],
        title: `스터디 제목은 두 줄까지 가능`,
        contents: `60자가 들어갈거같아용진자 어ㅣㄴ아러니아ㅓ리ㅏㅓ리ㅏ어리ㅏ너리나어리ㅏㄴ어리ㅏ너리ㅏㄴ러ㅣ아너린아ㅓ링ㄴ취우치나ㅜ치`,
      },
      {
        id: 1,
        tags: ['#javascript', '#data', '#AI'],
        title: `데이터 분석 스터디`,
        contents: `파이썬을 활용한 데이터 분석 및 AI 공부를 함께 합니다.`,
      },
      {
        id: 2,
        tags: ['#ALL', '#react', '#javascript'],
        title: `프론트엔드 개발 스터디`,
        contents: `React와 JavaScript로 프론트엔드 개발을 공부합니다.`,
      },
      {
        id: 3,
        tags: ['#backend', '#nodejs', '#express'],
        title: `백엔드 개발 스터디`,
        contents: `Node.js와 Express를 사용한 백엔드 개발을 다룹니다.`,
      },
      {
        id: 4,
        tags: ['#mobile', '#flutter', '#dart'],
        title: `모바일 앱 개발 스터디`,
        contents: `Flutter와 Dart로 모바일 앱 개발을 배웁니다.`,
      },
      {
        id: 5,
        tags: ['#devops', '#docker', '#javascript'],
        title: `DevOps 스터디`,
        contents: `Docker와 Kubernetes로 DevOps를 학습합니다.`,
      },
      {
        id: 6,
        tags: ['#ALL', '#kotlin', '#java'],
        title: `코틀린과 자바 스터디`,
        contents: `코틀린과 자바를 활용한 다양한 프로젝트를 진행합니다.`,
      },
      {
        id: 7,
        tags: ['#design', '#UI', '#UX'],
        title: `UI/UX 디자인 스터디`,
        contents: `사용자 경험과 인터페이스 디자인에 대해 공부합니다.`,
      },
      {
        id: 8,
        tags: ['#javascript', '#ALL', '#keras'],
        title: `머신러닝 스터디`,
        contents: `TensorFlow와 Keras를 사용한 머신러닝 프로젝트를 다룹니다.`,
      },
      {
        id: 9,
        tags: ['#cloud', '#aws', '#azure'],
        title: `클라우드 컴퓨팅 스터디`,
        contents: `AWS와 Azure를 사용한 클라우드 컴퓨팅을 배웁니다.`,
      },
      {
        id: 10,
        tags: ['#javascript', '#ALL', '#javascript'],
        title: `보안 및 네트워크 스터디`,
        contents: `네트워크 보안 및 암호화 기술을 학습합니다.`,
      },
      {
        id: 11,
        tags: ['#web', '#html', '#css'],
        title: `웹 개발 기초 스터디`,
        contents: `HTML과 CSS를 사용한 웹 개발 기초를 배웁니다.`,
      },
      {
        id: 12,
        tags: ['#game', '#unity', '#csharp'],
        title: `게임 개발 스터디`,
        contents: `Unity와 C#을 사용한 게임 개발을 다룹니다.`,
      },
      {
        id: 13,
        tags: ['#javascript', '#SQL', '#nosql'],
        title: `데이터베이스 스터디`,
        contents: `SQL과 NoSQL 데이터베이스를 공부합니다.`,
      },
      {
        id: 14,
        tags: ['#javascript', '#javascript', '#ALL'],
        title: `알고리즘 및 자료구조 스터디`,
        contents: `코딩 테스트 준비를 위한 알고리즘과 자료구조를 학습합니다.`,
      },
      {
        id: 15,
        tags: ['#javascript', '#javascript', '#ALL'],
        title: `블록체인 개발 스터디`,
        contents: `이더리움과 Solidity를 사용한 블록체인 개발을 다룹니다.`,
      },
    ];
    setItems(dummyItems.sort(() => Math.random() - 0.5));
  }, []);

  // 다음 슬라이드로 이동
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(items.length / 4));
  };

  // 이전 슬라이드로 이동
  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(items.length / 4)) % Math.ceil(items.length / 4)
    );
  };

  const handleClickItem = (id: number) => {
    // 서버와 통신하는 코드로 대체할 예정
    console.log('click!', id);
  };

  return (
    <TotalContainer>
      <TitleContainer>
        <MainTitle>전체 그룹</MainTitle>
        <More>
          더보기
          <IcArrowRightSmallGray />
        </More>
      </TitleContainer>
      <CarouselContainer>
        <CarouselButton $isHidden={currentSlide === 0} onClick={prevSlide}>
          <IcArrowLeftFill />
        </CarouselButton>
        <CarouselWrapper>
          <CarouselContent $currentSlide={currentSlide}>
            {Array.from({ length: Math.ceil(items.length / 4) }, (_, index) => (
              <CarouselSlide key={index}>
                {items.slice(index * 4, index * 4 + 4).map((card) => {
                  const { id, tags, title, contents } = card;
                  return (
                    <CarouselItem key={id} onClick={() => handleClickItem(id)}>
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
    </TotalContainer>
  );
};

export default TotalCard;

const TotalContainer = styled.div`
  width: 99.8rem;
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  width: 99.8rem;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 6rem 0 3.1rem;
`;

const MainTitle = styled.p`
  margin-left: 3.5rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const More = styled.p`
  display: flex;
  align-items: center;

  margin-right: 3.5rem;

  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.detail_regular_12};
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

  border-radius: 10px;
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
