import styled from 'styled-components';
import { IcAddBlack, IcAddGray, IcArrowRightBlack, IcBtnCopy } from '../assets';

interface CommonButtonProps {
  isActive?: boolean;
  category: string;
}

const CONTENTS = [
  {
    category: 'group_create',
    text: '그룹 생성하기',
    icon_active: <IcAddBlack />,
    icon_disabled: <IcAddGray />,
  },
  {
    category: 'group_direct',
    text: '그룹 바로가기',
    icon: <IcArrowRightBlack />,
  },
  { category: 'account_create', text: '가입하기' },
  { category: 'link_copy', text: '링크 복사하기', icon: <IcBtnCopy /> },
  { category: 'group_join', text: '참여하기' },
];

const CommonButton = ({ isActive, category }: CommonButtonProps) => {
  return (
    <Button $category={category} $isActive={isActive}>
      {CONTENTS.map((content) => {
        return (
          category === content.category && (
            <>
              {category === 'group_create' && (
                <IconContainer>
                  {isActive ? content.icon_active : content.icon_disabled}
                </IconContainer>
              )}
              <BtnText $category={category} $isActive={isActive}>
                {content.text}
              </BtnText>
              {(category === 'group_direct' || category === 'link_copy') && (
                <IconContainer>{content.icon}</IconContainer>
              )}
            </>
          )
        );
      })}
    </Button>
  );
};

export default CommonButton;

const Button = styled.button<{ $category: string; $isActive?: boolean }>`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;

  padding: ${({ $category }) => {
    switch ($category) {
      case 'group_create':
        return '1rem 1.4rem';
      case 'group_direct':
        return '1.4rem 1.8rem 1.4rem 2.1rem';
      case 'link_copy':
        return '1rem 2rem';
      default:
        return '1.2rem 5.4rem';
    }
  }};

  border-radius: 0.8rem;
  background-color: ${({ theme, $isActive, $category }) => {
    if ($isActive || $category === 'group_direct')
      return theme.colors.codrive_green;
    return theme.colors.gray700;
  }};
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnText = styled.p<{ $category: string; $isActive?: boolean }>`
  ${({ theme, $category }) =>
    $category === 'group_direct'
      ? theme.fonts.title_bold_16
      : theme.fonts.title_bold_20}
  color: ${({ theme, $isActive, $category }) => {
    if ($isActive || $category === 'group_direct') return theme.colors.gray900;
    return theme.colors.white;
  }};
`;
