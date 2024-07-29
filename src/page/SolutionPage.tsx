import React from 'react';
import styled, { css } from 'styled-components';
import { IcAddFill, IcAddFillDisabled, IcCancelFill, IcCode } from '../assets';
import CodeEditor from '../common/CodeSpace/CodeEditor';
import Memo from '../common/CodeSpace/Memo';
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
        code: '// 프로세스\nfunction solution(priorities, location) {\n  var cnt = 0;\n  const obj = priorities.map((prio, idx) => {\n    return { prio, idx };\n  });\n\n  while (obj.length) {\n    const MAX = Math.max(...priorities);\n\n    const process = obj.shift();\n    const prio = priorities.shift();\n    if (process.prio < MAX) {\n      obj.push(process);\n      priorities.push(prio);\n    } else {\n      cnt++;\n      if (process.idx === location) {\n        return cnt;\n      }\n    }\n  }\n\n  return cnt;\n}\n\nconsole.log(solution([2, 1, 3, 2], 2));\nconsole.log(solution([1, 1, 9, 1, 1, 1], 0));\n',
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
            <React.Fragment key={title}>
              <SolutionPageHeader>
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

              {codeblocks.map((codeblock, idx) => {
                const { code, memo } = codeblock;
                return (
                  <CodeBlckContainer key={idx} $isFirstCodeBlock={idx === 0}>
                    <TopBar>
                      <TextContainer>
                        <IcCode />
                        <Text>codeblock</Text>
                      </TextContainer>

                      {idx > 0 && <IcCancelFill />}
                    </TopBar>
                    <CodeEditor
                      isReadOnly={true}
                      stringId={idx.toString()}
                      code={code}
                    />
                    <Memo
                      isReadOnly={true}
                      stringId={idx.toString()}
                      memo={memo}
                    />
                  </CodeBlckContainer>
                );
              })}
              <AddBtnContainer>
                {codeblocks[codeblocks.length - 1].code.length ? (
                  <IcAddFill />
                ) : (
                  <IcAddFillDisabled />
                )}
              </AddBtnContainer>
            </React.Fragment>
          );
        })}
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

const CodeBlckContainer = styled.article<{ $isFirstCodeBlock: boolean }>`
  display: flex;
  flex-direction: column;

  width: 100%;
  ${({ $isFirstCodeBlock }) =>
    $isFirstCodeBlock &&
    css`
      margin-top: 2.4rem;
    `};
  margin-bottom: 3.6rem;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 0.8rem;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  width: fit-content;
  margin-top: 1rem;
  margin-left: 0.8rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
`;

const AddBtnContainer = styled.div`
  display: flex;
  justify-content: end;

  width: 100%;
  margin-top: -1.8rem;
`;
