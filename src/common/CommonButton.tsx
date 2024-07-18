import styled from 'styled-components';

interface CommonButtonProps {
  isActive: boolean;
  category: string;
}

const CommonButton = ({ isActive, category }: CommonButtonProps) => {
  const getText = () => {
    switch (category) {
      case 'create':
        return '그룹 생성하기';
      case 'join':
        return '그룹 바로가기';
      default:
        return '가입하기';
    }
  };

  return (
    <>
      <Button $category={category} isActive={isActive}>
        {getText()}
      </Button>
    </>
  );
};

export default CommonButton;

const Button = styled.button<{ $category: string; isActive: boolean }>`
  width: ${({ $category }) => {
    switch ($category) {
      case 'create':
        return '14.2rem';
      case 'join':
        return '17.6rem';
      default:
        return '17.8rem';
    }
  }};
  padding: ${({ $category }) => {
    switch ($category) {
      case 'create':
        return '1rem 1.4rem';
      case 'join':
        return '1rem 4.7rem 1rem 2rem';
      default:
        return '1.2rem 1.4rem';
    }
  }};

  border-radius: 0.8rem;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.codrive_green : theme.colors.gray700};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.gray900 : theme.colors.gray300};
`;
