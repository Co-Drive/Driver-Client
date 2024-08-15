import styled from 'styled-components';
import { LanguageProps } from '../../types/Register/RegisterType';
import SelectBox from './SelectBox';

const Language = ({ selectedTag, handleChangeTag }: LanguageProps) => {
  return (
    <LanguageContainer>
      <TitleContainer>
        <Title>주 언어</Title>
        <Essential>*</Essential>
      </TitleContainer>
      <SelectBox selectedTag={selectedTag} handleChangeTag={handleChangeTag} />
    </LanguageContainer>
  );
};

const LanguageContainer = styled.div`
  margin-bottom: 5rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1.7rem;
  margin-left: 0.2rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_20};
`;

const Essential = styled.span`
  margin-left: 0.6rem;

  ${({ theme }) => theme.fonts.title_medium_20};
  color: ${({ theme }) => theme.colors.codrive_purple};
`;

export default Language;
