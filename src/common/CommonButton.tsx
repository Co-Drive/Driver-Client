import styled from 'styled-components';

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

  return (
    <>
      <Button $category={category} $isActive={isActive}>
        {getText()}
      </Button>
    </>
  );
};

export default CommonButton;

const Button = styled.button<{ $category: string; $isActive: boolean }>`
  width: ${({ $category }) => {
    switch ($category) {
      case 'group_create':
        return '14.2rem';
      case 'group_join':
        return '17.6rem';
      case 'account_create':
        return '17.8rem';
      case 'link_copy':
        return '17.6rem';
      default:
        return;
    }
  }};
  padding: ${({ $category }) => {
    switch ($category) {
      case 'group_create':
        return '1rem 1.4rem 1rem 4rem';
      case 'group_join':
        return '1rem 4.7rem 1rem 2rem';
      case 'account_create':
        return '1.2rem 1.4rem';
      case 'link_copy':
        return '1rem 2rem';
      default:
        return;
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
