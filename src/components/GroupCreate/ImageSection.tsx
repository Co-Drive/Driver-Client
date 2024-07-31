import { useState } from 'react';
import styled from 'styled-components';
import { IcAddPhoto } from '../../assets';

const ImageSection = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <Section>
      <Label>
        대표 이미지 <Essential>*</Essential>
      </Label>
      <ImageContainer>
        {previewImage ? (
          <img src={previewImage} alt="대표 이미지" />
        ) : (
          <IcAddPhoto
            onClick={() => document.getElementById('fileInput')?.click()}
          />
        )}
        <HiddenInput
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </ImageContainer>
      <EssentialText>612px * 368px 사이즈를 권장드려요</EssentialText>
    </Section>
  );
};

export default ImageSection;

const Essential = styled.span`
  color: ${({ theme }) => theme.colors.codrive_purple};
`;

const Label = styled.label`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const Section = styled.section`
  margin: 4.3rem 0 5rem;
`;

const ImageContainer = styled.div`
  position: relative;
  max-width: 20.4rem;
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

const EssentialText = styled.p`
  margin-bottom: 1.8rem;

  ${({ theme }) => theme.fonts.detail_regular_12};
  color: ${({ theme }) => theme.colors.gray300};
`;
