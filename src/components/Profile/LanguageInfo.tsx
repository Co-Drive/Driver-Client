import styled from 'styled-components';
import SelectBox from '../Register/SelectBox';

const LanguageInfo = ({ selectedTag, handleChangeTag }) => {
  return (
    <LanguageInfoContainer>
      <TitleContainer>
        <Title>주 언어</Title>
      </TitleContainer>
      <SelectBox selectedTag={selectedTag} handleChangeTag={handleChangeTag} />
    </LanguageInfoContainer>
  );
};

const LanguageInfoContainer = styled.section`
  display: flex;
  align-items: center;

  padding-bottom: 1.4rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
`;

const TitleContainer = styled.p`
  display: flex;
`;

const Title = styled.p`
  margin-right: 4.8rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_16};
`;

export default LanguageInfo;
