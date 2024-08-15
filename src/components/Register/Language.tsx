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
  display: flex;

  margin-bottom: 1.7rem;
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_20};

  span {
    margin-left: 0.6rem;

    color: ${({ theme }) => theme.colors.codrive_purple};
  }
`;

export default Language;
