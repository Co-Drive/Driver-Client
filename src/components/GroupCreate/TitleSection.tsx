import { useState } from 'react';
import styled from 'styled-components';
import CommonInput from '../../common/CommonInput';

const TitleSection = () => {
  const [value, setValue] = useState('');
  const [text, setText] = useState('');
  const handleMemberCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };
  return (
    <Section>
      <div>
        <Label>
          그룹 제목 <Essential>*</Essential>
        </Label>
        <EssentialText>최대 20자 이내로 입력해주세요</EssentialText>
        <CommonInput
          category="title"
          value={text}
          handleChangeInputs={handleTextChange}
        />
      </div>
      <RecruitmentContainer>
        <Label>
          모집 인원 <Essential>*</Essential>
        </Label>
        <EssentialText>50명까지 가능해요</EssentialText>
        <CommonInput
          category="num"
          value={value}
          handleChangeInputs={handleMemberCountChange}
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
