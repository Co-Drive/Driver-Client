import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { IcArrowRightGray, IcLinkWhite } from '../../assets';
import Level from '../../components/Solution/Level';
import { SavedSolutionProps } from '../../types/Solution/solutionTypes';

const SavedSolution = ({
  record,
  isModal,
  removeBorder,
}: SavedSolutionProps) => {
  const navigate = useNavigate();
  const { recordId, title, level, tags, platform, problemUrl, createdAt } =
    record;
  const [month, date] = createdAt.split('.');

  const handleClickArrow = () => {
    navigate(`/solution/${recordId}`);
  };

  return (
    <SavedSolutionContainer $removeBorder={removeBorder} $isModal={isModal}>
      <QuesitonContainer>
        <Date>
          {month}월 {date}일
        </Date>

        <Question>
          <Title>{title}</Title>
          <TagContainer>
            <Tag>{tags.join(', ')}</Tag>
            <Tag>{platform}</Tag>
            <LinkBtn type="button">
              <IcLinkWhite />
              <Link onClick={() => window.open(problemUrl)}>링크 바로가기</Link>
            </LinkBtn>
          </TagContainer>
          <Level level={level} />
        </Question>
      </QuesitonContainer>

      <IcArrowRightGray onClick={handleClickArrow} />
    </SavedSolutionContainer>
  );
};

export default SavedSolution;

const SavedSolutionContainer = styled.article<{
  $removeBorder?: boolean;
  $isModal?: boolean;
}>`
  display: flex;
  justify-content: space-between;

  width: 100%;

  ${({ $isModal }) =>
    $isModal
      ? css`
          padding: 2.4rem 1rem 3rem 1.6rem;
        `
      : css`
          padding: 2.4rem 2.3rem 3rem 0.6rem;
        `};

  ${({ $removeBorder, theme }) =>
    !$removeBorder &&
    css`
      border-bottom: 0.1rem solid ${theme.colors.gray600};
    `};
`;

const QuesitonContainer = styled.article`
  display: flex;
  gap: 9.7rem;
`;

const Date = styled.p`
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const Question = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
  margin-bottom: 2.6rem;
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_32};
`;

const TagContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  margin-bottom: 1.4rem;
`;

const Tag = styled.span`
  max-width: 29.2rem;

  overflow-x: hidden;

  padding: 1.1rem 1.6rem;

  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_semiBold_14};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const LinkBtn = styled.button`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  padding: 0.8rem 1.6rem 0.7rem 1.2rem;

  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colors.gray600};
`;

const Link = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_14};
`;
