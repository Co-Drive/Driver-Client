import styled from 'styled-components';
import { IcArrowRightGray } from '../../../assets';
import SavedSolutionList from '../../../common/SolutionList/SavedSolutionList';

export interface SolutionsProps {
  nickname: string;
}

const Solutions = ({ nickname }: SolutionsProps) => {
  return (
    <SolutionsContainer>
      <TopContainer>
        <NicknameContainer>
          <Nickname>{nickname}</Nickname>
          <Text>님이 푼 문제</Text>
        </NicknameContainer>

        <MoreBtn type="button">
          <MoreText>더보기</MoreText>
          <IcArrowRightGray />
        </MoreBtn>
      </TopContainer>

      <SavedSolutionList isSmallList={true} />
    </SolutionsContainer>
  );
};

export default Solutions;

const SolutionsContainer = styled.section`
  display: flex;
  gap: 3.8rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const NicknameContainer = styled.div`
  display: flex;
  gap: 0.4rem;

  margin-left: 0.2rem;
`;

const Nickname = styled.span`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const MoreBtn = styled.button`
  display: flex;
  gap: 0.6rem;
  align-items: center;
`;

const MoreText = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;
