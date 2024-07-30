import styled from 'styled-components';
import { IcSecretGray, IcUnlockGray, IcUnlockWhite } from '../assets';
import { GroupVisibilityBtnProps } from '../types/GroupVisibility/groupType';

const GroupVisibilityBtn = ({
  isVisible,
  isActive,
  onClick,
}: GroupVisibilityBtnProps) => {
  return (
    <Button onClick={onClick} type="button" $isActive={isActive}>
      <ContentsContainer>
        <IconContainer>
          {isVisible && isActive && <IcUnlockWhite />}
          {isVisible && !isActive && <IcUnlockGray />}
          {!isVisible && <IcSecretGray />}
        </IconContainer>

        <Text $isActive={isActive}>{isVisible ? '공개그룹' : '비밀그룹'}</Text>
      </ContentsContainer>
    </Button>
  );
};

export default GroupVisibilityBtn;

const Button = styled.button<{ $isActive: boolean }>`
  padding: 1.5rem 1.6rem 1.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.gray500 : theme.colors.gray700};
`;

const ContentsContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p<{ $isActive: boolean }>`
  ${({ theme }) => theme.fonts.body_medium_16};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.white : theme.colors.gray300};
`;
