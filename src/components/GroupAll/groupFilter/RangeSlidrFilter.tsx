import React, { useEffect } from 'react';
import styled from 'styled-components';

interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
  rangeMin: number;
  minValue: number;
  maxValue: number;
  setMinValue: React.Dispatch<React.SetStateAction<number>>;
  setMaxValue: React.Dispatch<React.SetStateAction<number>>;
}

const RangeSliderFilter = ({
  min,
  max,
  step,
  rangeMin,
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
}: RangeSliderProps) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'min' | 'max'
  ) => {
    const value = parseInt(e.target.value, 10);

    if (type === 'min') {
      if (value >= min && value <= maxValue - rangeMin) {
        setMinValue(value);
      } else if (value > maxValue - rangeMin) {
        setMinValue(maxValue - rangeMin);
      }
    } else if (type === 'max') {
      if (value <= max && value >= minValue + rangeMin) {
        setMaxValue(value);
      } else if (value < minValue + rangeMin) {
        setMaxValue(minValue + rangeMin);
      }
    }
  };

  // minValue와 maxValue가 업데이트될 때마다 로그를 출력
  useEffect(() => {
    console.log('Slider Values:', { minValue, maxValue });
  }, [minValue, maxValue]);

  return (
    <RangeContainer>
      <RangeSlider>
        <RangeSelected
          left={`${((minValue - min) / (max - min)) * 100}%`}
          right={`${100 - ((maxValue - min) / (max - min)) * 100}%`}
        />
        <ThumbValueContainer>
          <ThumbValueLeft left={`${((minValue - min) / (max - min)) * 100}%`}>
            {minValue}명
          </ThumbValueLeft>
          <ThumbValueRigth
            right={`${100 - ((maxValue - min) / (max - min)) * 100}%`}
          >
            {maxValue}명
          </ThumbValueRigth>
        </ThumbValueContainer>
      </RangeSlider>
      <RangeInputContainer>
        <RangeInput
          type="range"
          className="min"
          min={min}
          max={max}
          value={minValue}
          step={step}
          onChange={(e) => handleInputChange(e, 'min')}
        />
        <RangeInput
          type="range"
          className="max"
          min={min}
          max={max}
          value={maxValue}
          step={step}
          onChange={(e) => handleInputChange(e, 'max')}
        />
      </RangeInputContainer>
    </RangeContainer>
  );
};

export default RangeSliderFilter;

const RangeContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 55rem;
`;

const RangeSlider = styled.div`
  position: relative;

  height: 0.7rem;

  border-radius: 9.9rem;
  background-color: ${({ theme }) => theme.colors.gray400};
`;

const RangeSelected = styled.span<{ left: string; right: string }>`
  position: absolute;
  right: ${({ right }) => right};
  left: ${({ left }) => left};

  height: 100%;

  border-radius: 9.9rem;
  background-color: ${({ theme }) => theme.colors.codrive_purple};
`;

const RangeInputContainer = styled.div`
  position: relative;
`;

const RangeInput = styled.input`
  position: absolute;
  top: -7px;

  width: 100%;
  height: 0.5rem;
  margin: 0 auto;

  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &::-webkit-slider-thumb {
    position: relative;

    width: 1.9rem;
    height: 1.9rem;

    border: 0.4rem solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.codrive_purple};
    pointer-events: auto;
    -webkit-appearance: none;
  }

  &::-moz-range-thumb {
    position: relative;

    width: 1.9rem;
    height: 1.9rem;

    border: 0.4rem solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.codrive_purple};
    pointer-events: auto;
  }
`;

const ThumbValueContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

const ThumbValueLeft = styled.div<{ left?: string; right?: string }>`
  position: absolute;
  top: 2.5rem;

  width: 2.5rem;

  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ theme }) => theme.fonts.detail_regular_12};
  white-space: nowrap;
`;

const ThumbValueRigth = styled.div<{ left?: string; right?: string }>`
  position: absolute;
  top: 2.5rem;

  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ theme }) => theme.fonts.detail_regular_12};
  white-space: nowrap;
`;
