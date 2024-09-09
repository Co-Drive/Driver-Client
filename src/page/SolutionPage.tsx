import { useLocation, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { IcCode } from '../assets';
import CodeEditor from '../common/CodeSpace/CodeEditor';
import Memo from '../common/CodeSpace/Memo';
import PageLayout from '../components/PageLayout/PageLayout';
import SolutionHeaderBottom from '../components/Solution/Header/SolutionHeaderBottom';
import SolutionHeaderTop from '../components/Solution/Header/SolutionHeaderTop';
import useGetRecords from '../libs/hooks/Solution/useGetRecords';

const SolutionPage = () => {
  const { state } = useLocation();
  const { id } = useParams();
  if (!id) return;
  const { data, isLoading } = useGetRecords(parseInt(id));
  const { title, level, tags, platform, problemUrl, codeblocks, createdAt } =
    !isLoading && data?.data;

  return (
    <PageLayout category="문제풀이">
      {!isLoading && (
        <SolutionPageContainer>
          <SolutionPageHeader>
            <SolutionHeaderTop
              recordId={parseInt(id)}
              followerId={state}
              title={title}
              date={createdAt.split(' ')[0]}
              paintedStarArr={Array(level)
                .fill(1)
                .concat(Array(5 - level).fill(0))}
            />

            <SolutionHeaderBottom
              tags={tags}
              platform={platform}
              problemUrl={problemUrl}
            />
          </SolutionPageHeader>
          {codeblocks.map(
            (codeblock: { code: string; memo: string }, idx: number) => {
              const { code, memo } = codeblock;
              return (
                <CodeBlckContainer key={idx} $isFirstCodeBlock={idx === 0}>
                  <TopBar>
                    <TextContainer>
                      <IcCode />
                      <Text>codeblock</Text>
                    </TextContainer>
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
            }
          )}
        </SolutionPageContainer>
      )}
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
