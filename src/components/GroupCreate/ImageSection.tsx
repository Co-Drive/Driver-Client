import { useState } from 'react';
import styled from 'styled-components';
import { IcAddPhoto, IcCancelSmallWhite } from '../../assets';
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
        <TooltipInfo $isVisible={isTooltipVisible}>
          <LineText>이미지는 최대 10MB까지 업로드 가능해요</LineText>
          <TooltipClose type="button" onClick={handleTooltipClose}>
            <IcCancelSmallWhite />
          </TooltipClose>
        </TooltipInfo>
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

const TooltipInfo = styled.div<{ $isVisible: boolean }>`
  display: flex;
  position: relative;
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};

  padding: 0.6rem 1.1rem;
  margin-top: 1.2rem;
  margin-right: 2.8rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray400};

  white-space: nowrap;
  transform: translate(8px, -50%);
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;

  /* 화살표 스타일 */
  &::after {
    position: absolute;
    top: 51%;
    left: -1.2rem;

    border-color: transparent rgb(100 104 117 / 100%) transparent transparent;
    border-width: 0.7rem;
    border-style: solid;
    content: '';
    transform: translateY(-50%);
  }
`;

const TooltipClose = styled.button`
  cursor: pointer;

  display: flex;
`;

const LineText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_ligth_12};
  line-height: 1.8rem;
`;
