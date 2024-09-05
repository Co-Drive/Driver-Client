import styled from 'styled-components';
import CommonInput from '../../common/CommonInput';
import { TitleSectionProps } from '../../types/GroupCreate/GroupCreateType';

const TitleSection = ({
  titleValue,
  recruitedValue,
  handleMemberCountChange,
}: TitleSectionProps) => {
  return (
    <Section>
      <Label>
        <TitleContainer>
          그룹 제목<Essential>*</Essential>
        </TitleContainer>
        <EssentialText>최대 20자 이내로 입력해주세요</EssentialText>
        <CommonInput
          category="title"
          value={titleValue}
          handleChangeInputs={handleMemberCountChange}
        />
      </Label>
      <Label>
        <TitleContainer>
          모집 인원 <Essential>*</Essential>
        </TitleContainer>
        <EssentialText>50명까지 가능해요</EssentialText>
        <CommonInput
          category="num"
          value={recruitedValue}
          handleChangeInputs={handleMemberCountChange}
        />
      </Label>
    </Section>
  );
};

export default TitleSection;

const Section = styled.section`
  display: flex;
  gap: 1.8rem;
`;

const EssentialText = styled.p`
  margin: 0.6rem 0 1.8rem 0.2rem;
  ${({ theme }) => theme.fonts.detail_regular_12};

  color: ${({ theme }) => theme.colors.gray300};
`;

const Label = styled.label`
  align-items: center;

  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const Essential = styled.span`
  margin-left: 0.6rem;

  ${({ theme }) => theme.fonts.title_medium_20};
  color: ${({ theme }) => theme.colors.codrive_purple};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  margin-left: 0.2rem;

  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;
