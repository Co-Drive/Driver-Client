import styled from 'styled-components';
import { WeekRateProps } from '../../types/Week/weekRateTypes';

const WeekRateCustomLabel = ({ viewBox, value }: WeekRateProps) => {
  const { cx, cy } = viewBox;

  return (
    <>
      <StyledText
        x={cx}
        y={cy - 20}
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {value}
      </StyledText>
    </>
  );
};

export default WeekRateCustomLabel;

const StyledText = styled.text`
  fill: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_32};
  background-color: pink;
`;
