import { useRef, useState } from 'react';
import styled from 'styled-components';
import { IcAddPhoto, IcSecretGray, IcUnlockGray } from '../assets';
import PageLayout from '../components/PageLayout/PageLayout';
import { PLACEHOLDER } from '../constants/CommonTextarea/textareaConst';

const GroupCreate = () => {
  const [isPublicGroup, setIspublicGroup] = useState(true);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const memberCountRef = useRef<HTMLInputElement>(null);

  const handlePublicClick = () => {
    if (!isPublicGroup) setIspublicGroup(true);
  };

  const handleSecretClick = () => {
    if (isPublicGroup) setIspublicGroup(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    }
  };

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
    <PageLayout category="group">
      <Form>
        <Header>그룹 생성하기</Header>
        <Borderline />
        <Section>
          <GroupSetting>
            그룹 설정 <Essential>*</Essential>
          </GroupSetting>
          <ButtonContainer>
            <GroupButton
              type="button"
              $isActive={isPublicGroup}
              onClick={handlePublicClick}
            >
              <IcUnlockGray />
              공개그룹
            </GroupButton>
            <GroupButton
              type="button"
              $isActive={!isPublicGroup}
              onClick={handleSecretClick}
            >
              <IcSecretGray />
              비공개그룹
            </GroupButton>
          </ButtonContainer>
        </Section>

        <ImageSection>
          <Label>
            대표 이미지 <Essential>*</Essential>
          </Label>
          <ImageContainer
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            {previewImage ? (
              <img src={previewImage} alt="대표 이미지" />
            ) : (
              <IcAddPhoto />
            )}
            <HiddenInput
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </ImageContainer>
          <EssentialText>612px * 368px 사이즈를 권장드려요</EssentialText>
        </ImageSection>

        <TitleSection>
          <div>
            <Label>
              그룹 제목 <Essential>*</Essential>
            </Label>
            <EssentialText>최대 20자 이내로 입력해주세요</EssentialText>
            <TitleInput type="text" placeholder={PLACEHOLDER[2]} />
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
        </TitleSection>

        <section>
          <Label>
            사용 언어 <Essential>*</Essential>
          </Label>
          <select>
            <option>복수선택 가능</option>
          </select>
        </section>

        <section>
          <Label>
            한 줄 소개 <Essential>*</Essential>
          </Label>
          <textarea maxLength={60} placeholder={PLACEHOLDER[0]} />
        </section>
        <section>
          <Label>
            진행 방식 <Essential>*</Essential>
          </Label>
          <textarea maxLength={1000} placeholder={PLACEHOLDER[4]} />
        </section>
        <button>그룹 생성하기</button>
      </Form>
    </PageLayout>
  );
};

export default GroupCreate;

const Form = styled.form`
  background-color: pink;
`;

const Header = styled.header`
  ${({ theme }) => theme.fonts.title_bold_24};
  margin: 6rem 0 2.1rem;

  color: ${({ theme }) => theme.colors.white};
`;

const Borderline = styled.div`
  border-bottom: 0.01rem solid ${({ theme }) => theme.colors.gray300};
`;

const Section = styled.section`
  /* background-color: red; */
`;

const GroupSetting = styled.h2`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  margin-top: 4rem;

  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const Essential = styled.span`
  color: ${({ theme }) => theme.colors.codrive_purple};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.8rem;

  margin-top: 2rem;
`;

const GroupButton = styled.button<{ $isActive?: boolean }>`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  padding: 1.5rem 1.6rem 1.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.gray500 : theme.colors.gray700};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.white : theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const Label = styled.label`
  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const ImageSection = styled.section`
  margin: 4.3rem 0 5rem;

  /* background-color: blue; */
`;

const ImageContainer = styled.div`
  position: relative;

  cursor: pointer;

  img,
  svg {
    max-width: 100%;
    max-height: 100%;

    border-radius: 0.8rem;
  }

  input {
    display: none;

    /* input 요소 숨기기 */
  }
`;

const HiddenInput = styled.input`
  position: absolute;
  overflow: hidden;

  width: 0;
  height: 0;
  padding: 0;

  border: 0;
`;

const TitleSection = styled.section`
  display: flex;
  gap: 1.8rem;
  align-items: flex-start;

  background-color: #4d8000;
`;

const TitleInput = styled.input`
  width: 45.3rem;
  height: 4.8rem;
  padding: 1.5rem 2rem 1.4rem;

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
