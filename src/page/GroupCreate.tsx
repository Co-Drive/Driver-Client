import { useState } from 'react';
import styled from 'styled-components';
import { IcAddPhoto, IcSecretGray, IcUnlockGray } from '../assets';
import PageLayout from '../components/PageLayout/PageLayout';
import { PLACEHOLDER } from '../constants/CommonTextarea/textareaConst';

interface GroupCreateProps {
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GroupCreate = () => {
  const [isPublicGroup, setIspublicGroup] = useState(true);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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

  return (
    <PageLayout category="group">
      <Form>
        <Header>그룹 생성하기</Header>
        <Borderline />
        <Section>
          <GroupSetting>
            그룹 설정
            <Essential>*</Essential>
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
          <ImageWrapper
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
            <p>612px * 368px 사이즈를 권장드려요</p>
          </ImageWrapper>
        </ImageSection>

        <section>
          <div>
            <Label>
              그룹 제목 <Essential>*</Essential>
            </Label>
          </div>
          <input type="text" placeholder={PLACEHOLDER[2]} />
        </section>

        <section>
          <Label>
            모집 인원 <Essential>*</Essential>
          </Label>
          <p>50명까지 가능해요</p>
          <input type="number" placeholder={PLACEHOLDER[3]} />
        </section>

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
  background-color: red;
`;

const GroupSetting = styled.h2`
  display: flex;
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

const ImageWrapper = styled.div`
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
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;
