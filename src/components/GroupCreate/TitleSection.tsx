import styled from 'styled-components';
import CommonInput from '../../common/CommonInput';

interface TitleSectionProps {
  titleValue: string;
  recruitedValue: string;
  handleMemberCountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TitleSection = ({
  titleValue,
  recruitedValue,
  handleMemberCountChange,
}: TitleSectionProps) => {
  return (
    <Section>
      <Label>
        그룹 제목<Essential>*</Essential>
        <EssentialText>최대 20자 이내로 입력해주세요</EssentialText>
        <CommonInput
          category="title"
          value={titleValue}
          handleChangeInputs={handleMemberCountChange}
        />
      </Label>
      <Label>
        모집 인원 <Essential>*</Essential>
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
  /* margin-bottom: 1.8rem; */
  margin: 0.6rem 0 1.8rem;

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

  color: ${({ theme }) => theme.colors.codrive_purple};
`;
