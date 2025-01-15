import { useState } from 'react';
import styled from 'styled-components';
import { IcAddPhoto } from '../../assets';
import TooltipInfo from '../../common/DetailTooltip';
import { ImageSectionProps } from '../../types/GroupCreate/GroupCreateType';

const ImageSection = ({
  previewImage,
  handleImageChange,
}: ImageSectionProps) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);

  const handleTooltipClose = () => setIsTooltipVisible(false);

  return (
    <Section>
      <LabelContainer>
        <Label>대표 이미지</Label>
        <TooltipInfo
          isVisible={isTooltipVisible}
          onClick={handleTooltipClose}
          text="이미지는 최대 10MB까지 업로드 가능해요"
        />
      </LabelContainer>
      <ImageContainer
        onClick={() => document.getElementById('fileInput')?.click()}
      >
        {previewImage ? (
          <Image src={previewImage} alt="대표 이미지" />
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
      <EssentialText>
        612px * 368px 사이즈를 권장드려요 / 이미지를 선택하지 않을 시,
        코드라이브 제공 이미지로 대체되어요
      </EssentialText>
    </Section>
  );
};

export default ImageSection;

const Label = styled.label`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  margin: 0 0.7rem 2rem 0.2rem;

  ${({ theme }) => theme.fonts.title_bold_20};

  color: ${({ theme }) => theme.colors.white};
`;

const LabelContainer = styled.div`
  display: flex;
`;

const Section = styled.section`
  margin: 4.3rem 0 5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  border-radius: 0.8rem;
`;

const ImageContainer = styled.div`
  position: relative;

  width: 20.4rem;
  height: 12.2rem;
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
