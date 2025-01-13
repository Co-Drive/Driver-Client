import styled from 'styled-components';
import { IcCancelSmallWhite } from '../assets';

interface TooltipProps {
  text: string;
  isVisible?: boolean;
  onClick: () => void;
}

const TooltipInfo = ({ isVisible, onClick, text }: TooltipProps) => {
  return (
    <TooltipContainer $isVisible={isVisible}>
      <Text>{text}</Text>
      <TooltipClose type="button" onClick={onClick}>
        <IcCancelSmallWhite />
      </TooltipClose>
    </TooltipContainer>
  );
};

const TooltipContainer = styled.div<{ $isVisible?: boolean }>`
  display: flex;
  position: relative;
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};

  padding: 0.6rem 1.1rem;
  margin-top: 1.2rem;
  margin-right: 4.2rem;

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

const Text = styled.p`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_ligth_12};
`;

const TooltipClose = styled.button`
  display: flex;
  align-items: center;
`;

export default TooltipInfo;
