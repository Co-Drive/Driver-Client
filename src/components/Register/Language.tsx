import styled from 'styled-components';
import { LanguageProps } from '../../types/Register/RegisterType';
import SelectBox from './SelectBox';

const Language = ({ selectedTag, handleChangeTag }: LanguageProps) => {
  return (
    <LanguageContainer>
      <Title>
        주 언어 <span>*</span>
      </Title>
      <SelectBox selectedTag={selectedTag} handleChangeTag={handleChangeTag} />
    </LanguageContainer>
  );
};

const LanguageContainer = styled.div`
  margin-bottom: 5rem;
`;

const Title = styled.h2`
  margin-bottom: 0.6rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_20};

  span {
    color: ${({ theme }) => theme.colors.codrive_purple};
  }
`;

export default Language;
