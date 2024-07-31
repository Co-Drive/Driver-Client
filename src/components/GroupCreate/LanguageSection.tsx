import styled from 'styled-components';
import { IcArrowBottomGray } from '../../assets';
const LanguageSection = () => {
  return (
    <Section>
      <Label>
        사용 언어 <Essential>*</Essential>
      </Label>
      <DropdownHeader>
        <Dropdown>복수선택 가능</Dropdown>
        <IconContainer>
          <IcArrowBottomGray />
        </IconContainer>
      </DropdownHeader>
    </Section>
  );
};

export default LanguageSection;

const Section = styled.section`
  position: relative;

  margin-top: 4rem;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 61.1rem;
  height: 4.8rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
  cursor: pointer;
`;

const Dropdown = styled.div`
  padding: 1.5rem 2rem 1.4rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_ligth_16};
`;

const IconContainer = styled.div`
  margin-right: 1.2rem;
`;

const Label = styled.label`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  margin-bottom: 1.8rem;

  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const Essential = styled.span`
  color: ${({ theme }) => theme.colors.codrive_purple};
`;
