import styled from 'styled-components';
import { NumOfLanguagesProps } from '../../../types/Admin/adminType';

const NumOfLanguages = ({
  capacity,
  languageMemberCount,
}: NumOfLanguagesProps) => {
  return (
    <NumOfLanguagesContainer>
      <Title>사용언어 별 인원</Title>
      <TotalMembers>
        {languageMemberCount.map((member) => {
          const { language, count } = member;
          const languageRatio = (count / capacity) * 100;

          return (
            <LanguageOfMemberContainer key={language}>
              <Language>#{language}</Language>
              <Graph>
                <ActiveGraph $count={languageRatio} />
              </Graph>
              <Num>{count}</Num>
              <Text>명</Text>
            </LanguageOfMemberContainer>
          );
        })}
      </TotalMembers>
    </NumOfLanguagesContainer>
  );
};

export default NumOfLanguages;

const NumOfLanguagesContainer = styled.article`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.header`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.title_bold_14};
`;

const TotalMembers = styled.div`
  display: flex;
  gap: 1.7rem;
  flex-direction: column;

  max-height: 9.1rem;

  overflow: hidden auto;
`;

const LanguageOfMemberContainer = styled.div`
  display: flex;
  gap: 1.1rem;
  justify-content: baseline;
  align-items: center;
`;

const Language = styled.p`
  width: 9.4rem;

  color: ${({ theme }) => theme.colors.codrive_green};

  ${({ theme }) => theme.fonts.body_eng_semibold_14};
  text-align: left;
`;

const Graph = styled.div`
  flex-grow: 1;
  position: relative;

  height: 1.4rem;

  border-radius: 9.9rem;
  background-color: ${({ theme }) => theme.colors.gray600};
  min-width: 31.6rem;
`;

const ActiveGraph = styled.span<{ $count: number }>`
  position: absolute;
  top: 0;
  left: 0;

  width: ${({ $count }) => `${$count}%`};
  height: 1.4rem;

  border-radius: 9.9rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
`;

const Num = styled.p`
  width: 1.8rem;
  margin-right: -0.9rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_regular_14};
  text-align: right;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.title_regular_14};
`;
