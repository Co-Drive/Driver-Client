import { useRef } from 'react';
import styled from 'styled-components';
import { PLACEHOLDER } from '../../constants/CommonTextarea/textareaConst';

const TitleSection = () => {
  const memberCountRef = useRef<HTMLInputElement>(null);

  const handleMemberCountChange = () => {
    const value = memberCountRef.current?.value || '';
    const numericValue = parseInt(value, 10);

    // 입력 값이 숫자인지 확인하고, 두 자리까지만 허용하며, 최대 50까지만 허용
    if (!isNaN(numericValue) && numericValue <= 50) {
      memberCountRef.current!.value = value.slice(0, 2);
    } else {
      memberCountRef.current!.value = value.slice(0, -1);
    }
  };
  return (
    <Section>
      <div>
        <Label>
          그룹 제목 <Essential>*</Essential>
        </Label>
        <EssentialText>최대 20자 이내로 입력해주세요</EssentialText>
        <TitleInput type="text" maxLength={20} placeholder={PLACEHOLDER[2]} />
      </div>
      <RecruitmentContainer>
        <Label>
          모집 인원 <Essential>*</Essential>
        </Label>
        <EssentialText>50명까지 가능해요</EssentialText>
        <NumberInput
          type="number"
          placeholder={PLACEHOLDER[3]}
          ref={memberCountRef}
          onInput={handleMemberCountChange}
        />
      </RecruitmentContainer>
    </Section>
  );
};

export default TitleSection;

const Section = styled.section`
  display: flex;
  gap: 1.8rem;
`;

const TitleInput = styled.input`
  width: 45.3rem;
  height: 4.8rem;
  padding: 1.5rem 2rem 1.4rem;

  border: none;
  border-radius: 0.8rem;
  ${({ theme }) => theme.fonts.body_ligth_16};
  background-color: ${({ theme }) => theme.colors.gray700};
  color: ${({ theme }) => theme.colors.gray300};
`;

const EssentialText = styled.p`
  margin-bottom: 1.8rem;

  ${({ theme }) => theme.fonts.detail_regular_12};
  color: ${({ theme }) => theme.colors.gray300};
`;

const RecruitmentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NumberInput = styled.input`
  width: 13.9rem;
  height: 5.3rem;
  padding: 1.5rem 2rem 1.4rem;
  margin: 0;

  border: none;

  /* 숫자 입력 필드에서 스핀 버튼 제거 */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;

    margin: 0;
  }

  border-radius: 0.8rem;
  ${({ theme }) => theme.fonts.body_ligth_16};
  background-color: ${({ theme }) => theme.colors.gray700};
  color: ${({ theme }) => theme.colors.gray300};
`;

const Label = styled.label`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  margin-bottom: 0.6rem;

  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const Essential = styled.span`
  color: ${({ theme }) => theme.colors.codrive_purple};
`;
