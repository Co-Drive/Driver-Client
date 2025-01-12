import styled from 'styled-components';
import { LanguageInfoProps } from '../../types/Profile/ProfileType';
import SelectBox from '../Register/SelectBox';

const LanguageInfo = ({ selectedTag, handleChangeTag }: LanguageInfoProps) => {
  return (
    <LanguageInfoContainer>
      <TitleContainer>
        <Title>주 언어</Title>
      </TitleContainer>
      <SelectContainer>
        <SelectBox
          selectedTag={selectedTag}
          handleChangeTag={handleChangeTag}
        />
      </SelectContainer>
    </LanguageInfoContainer>
  );
};

const LanguageInfoContainer = styled.section`
  display: flex;
  align-items: center;
  position: relative;

  padding-bottom: 1.4rem;
  margin-bottom: 3.2rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray700};
`;

const TitleContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin: 1.4rem 7.6rem 1.4rem 0;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_16};
`;

const SelectContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  padding-bottom: 1.4rem;
`;

export default LanguageInfo;
