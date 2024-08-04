import styled from 'styled-components';
import { IcAddPhoto } from '../../assets';
import { ImageSectionProps } from '../../types/GroupCreate/GroupCreateType';

const ImageSection = ({
  previewImage,
  handleImageChange,
}: ImageSectionProps) => {
  return (
    <Section>
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

  margin-bottom: 2rem;

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

  input {
    display: none;
  }
`;

const HiddenInput = styled.input`
  position: absolute;
  overflow: hidden;

  padding: 0;

  border: 0;
`;

const EssentialText = styled.p`
  margin-top: 0.8rem;

  ${({ theme }) => theme.fonts.detail_regular_12};
  color: ${({ theme }) => theme.colors.gray300};
`;
