import styled from 'styled-components';

const Header = () => {
  const HEDEAR_DUMMY = {
    title: '이제는 더이상 물러날 곳이 없는 스터디',
    tags: ['Java', 'JavaScript', 'Python'],
  };

  const { title, tags } = HEDEAR_DUMMY;

  return (
    <TitleContainer>
      <Title>{title}</Title>
      <Tags>
        {tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
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
