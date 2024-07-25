import styled from 'styled-components';
import PageLayout from '../components/PageLayout/PageLayout';
import SolutionHeaderBottom from '../components/Solution/Header/SolutionHeaderBottom';
import SolutionHeaderTop from '../components/Solution/Header/SolutionHeaderTop';

const DUMMY = [
  {
    title: '전생했더니 슬라임 연구자가 아니었던 건에 대하여',
    date: '2024.07.23',
    level: 3,
    tags: ['스택/큐', '동적계획법 (Dynamic Programming)'],
    platform: '프로그래머스',
    problemUrl: 'https://roseline124.github.io/djdefagrssd.dfdsdfds',
    codeblocks: [
      {
        code: 'from django.contrib.auth import views as auth_views를 추가해야 Django auth에 내장되어 있는 LoginView, LogoutView를 사용할 수 있다. 따라서 앱 폴더의 views.py에서 따로 코드를 작성할 필요가 없다.\n\nas auth_views로 alias(별칭)을 주는 이유는 앱 폴더 내에 있는 views.py와 충돌하지 않도록 다른 이름을 사용한 것이다.',
        memo: 'from django.contrib.auth import views as auth_views를 추가해야 Django auth에 내장되어 있는 LoginView, LogoutView를 사용할 수 있다. 따라서 앱 폴더의 views.py에서 따로 코드를 작성할 필요가 없다.\n\nas auth_views로 alias(별칭)을 주는 이유는 앱 폴더 내에 있는 views.py와 충돌하지 않도록 다른 이름을 사용한 것이다.',
      },
      {
        code: '// code',
        memo: '',
      },
    ],
  },
];

const SolutionPage = () => {
  return (
    <PageLayout category="문제풀이">
      <SolutionPageContainer>
        {DUMMY.map((data) => {
          const { title, date, level, tags, platform, problemUrl, codeblocks } =
            data;
          const paintedStarArr: Array<number> = Array(level)
            .fill(1)
            .concat(Array(5 - level).fill(0));

          return (
            <SolutionPageHeader key={title}>
              <SolutionHeaderTop
                title={title}
                date={date}
                paintedStarArr={paintedStarArr}
              />

              <SolutionHeaderBottom
                tags={tags}
                platform={platform}
                problemUrl={problemUrl}
              />
            </SolutionPageHeader>
          );
        })}
        {/* <CodeEditor />
        <Memo /> */}
      </SolutionPageContainer>
    </PageLayout>
  );
};

export default SolutionPage;

const SolutionPageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 6.4rem 25.7rem 20rem;
`;

const SolutionPageHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;
