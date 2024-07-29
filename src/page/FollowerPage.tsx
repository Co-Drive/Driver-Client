import styled from 'styled-components';
import ParticipatingGroup from '../components/\bFollwer/ParticipatingGroup';
import PageLayout from '../components/PageLayout/PageLayout';

const DUMMY = {
  profileImg: '',
  nickname: '코딩하는 갱얼쥐',
  isFollowed: false,
  introduce:
    '나를 소개하는 문구를 적어주세요.아아아 최대 두줄까지만 적을 수 있게 하는거어떠나를 소개하는 문구를 적어주세요.아아아 최대 두줄까지만 적을 수 있게 하는거어떠',
  github: 'https://github.com/Arooming',
  group: [
    {
      id: 0,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQdMSF0UfUeev25_EDlcSS0jCfciYTLT-qw&s',
      title: '이제는 더이상 물러날 곳이 없는 스터디',
      tags: ['#swift', '#java', '#javascript'],
      introduce:
        '안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다',
    },
    {
      id: 1,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRolslbPtm3OymbdIwYgusZ9wqH4-fvxhln2A&s',
      title: '이제는 더이상 물러날 곳이 없는 스터디',
      tags: ['#swift', '#java', '#javascript'],
      introduce:
        '안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다',
    },
    {
      id: 2,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwTi48CyZZGovLP7-u6CPqTn8ygolt2N5aA&s',
      title: '이제는 더이상 물러날 곳이 없는 스터디',
      tags: ['#swift', '#java', '#javascript'],
      introduce:
        '안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다',
    },
    {
      id: 3,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQdMSF0UfUeev25_EDlcSS0jCfciYTLT-qw&s',
      title: '이제는 더이상 물러날 곳이 없는 스터디',
      tags: ['#swift', '#java', '#javascript'],
      introduce:
        '안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다',
    },
    {
      id: 4,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRolslbPtm3OymbdIwYgusZ9wqH4-fvxhln2A&s',
      title: '이제는 더이상 물러날 곳이 없는 스터디',
      tags: ['#swift', '#java', '#javascript'],
      introduce:
        '안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다',
    },
  ],
  recommend: [
    {
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflIJYye-3WuwXfwuKLvVcajyyi8Rbu9Bx0g&s',
      nickname: '코딩하는 갱얼쥐',
      isFollowed: false,
    },
    {
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflIJYye-3WuwXfwuKLvVcajyyi8Rbu9Bx0g&s',
      nickname: '코딩하는 갱얼쥐',
      isFollowed: false,
    },
    {
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflIJYye-3WuwXfwuKLvVcajyyi8Rbu9Bx0g&s',
      nickname: '코딩하는 갱얼쥐',
      isFollowed: false,
    },
    {
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflIJYye-3WuwXfwuKLvVcajyyi8Rbu9Bx0g&s',
      nickname: '코딩하는 갱얼쥐',
      isFollowed: false,
    },
    {
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflIJYye-3WuwXfwuKLvVcajyyi8Rbu9Bx0g&s',
      nickname: '코딩하는 갱얼쥐',
      isFollowed: false,
    },
    {
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflIJYye-3WuwXfwuKLvVcajyyi8Rbu9Bx0g&s',
      nickname: '코딩하는 갱얼쥐',
      isFollowed: false,
    },
  ],
};

const FollowerPage = () => {
  const {
    // profileImg,
    // nickname,
    // isFollowed,
    // introduce,
    // github,
    group,
    // recommend,
  } = DUMMY;
  return (
    <PageLayout category="홈">
      <FollowerPageContainer>
        <ParticipatingGroup group={group} />
      </FollowerPageContainer>
    </PageLayout>
  );
};

export default FollowerPage;

const FollowerPageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 8.6rem 25.7rem 20rem;
`;
