import styled from 'styled-components';
import { GroupDetailHeaderProps } from '../../types/GroupDetail/groupDetailType';
import { ALL_TAG } from '../../constants/utils/allTag';

const Header = ({ title, tags }: GroupDetailHeaderProps) => {
  const renderTags = tags.length > 5 ? ALL_TAG : tags;

  return (
    <TitleContainer>
      <Title>{title}</Title>
      <Tags>
        {renderTags.map((tag) => {
          return <Tag key={tag}>#{tag}</Tag>;
        })}
      </Tags>
    </TitleContainer>
  );
};

export default Header;

const TitleContainer = styled.header`
  display: flex;
  gap: 1.4rem;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  margin-bottom: 3.4rem;
  margin-left: 0.3rem;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_32};
`;

const Tags = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

const Tag = styled.p`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.body_eng_medium_16};
`;
