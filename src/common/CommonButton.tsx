import styled from 'styled-components';
import { IcAdd, IcArrowRightGray, IcBtnCopy } from '../assets';

interface CommonButtonProps {
  isActive?: boolean;
  category: string;
}

const CommonButton = ({ isActive = false, category }: CommonButtonProps) => {
  const getText = () => {
    switch (category) {
      case 'group_create':
        return '그룹 생성하기';
      case 'group_join':
        return '그룹 바로가기';
      case 'account_create':
        return '가입하기';
      case 'link_copy':
        return '링크 복사하기';
    }
  };

  const getIcon = () => {
    switch (category) {
      case 'group_create':
        return IcAdd;
      case 'group_join':
        return IcArrowRightGray;
      case 'link_copy':
        return IcBtnCopy;
      default:
        return null;
    }
  };

  // const IconComponent = getIcon();

  return (
    <>
      <Button $category={category} $isActive={isActive}>
        {category === 'link_copy' ? (
          <LogoCopyContainer>
            {getText()}
            <Icon as={IcBtnCopy} />
          </LogoCopyContainer>
        ) : (
          getText()
        )}
      </Button>
    </>
  );
};

export default CommonButton;

const LogoCopyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: pink; */
`;

const Button = styled.button<{ $category: string; $isActive: boolean }>`
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.fonts.title_bold_20}

  padding: ${({ $category }) => {
    switch ($category) {
      case 'group_create':
        return '1rem 1.4rem 1rem 4rem';
      case 'group_join':
        return '1rem 4.7rem 1rem 2rem';
      case 'account_create':
        return '1.2rem 5.4rem';
      case 'link_copy':
        return '1rem 2rem';
    }
  }};

  border-radius: 0.8rem;
  background-color: ${({ theme, $isActive, $category }) => {
    if ($category === 'link_copy') return theme.colors.gray700;
    return $isActive ? theme.colors.codrive_green : theme.colors.gray700;
  }};
  color: ${({ theme, $isActive, $category }) => {
    if ($category === 'link_copy') return theme.colors.white;
    return $isActive ? theme.colors.gray900 : theme.colors.white;
  }};
`;

const Icon = styled.svg`
  margin-left: 0.8rem;

  background-color: pink;
`;
