import styled from 'styled-components';

// 아이콘 추가 후 제거할 컴포넌트
const Green = () => {
  return <Test></Test>;
};

export default Green;

const Test = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  background-color: ${({ theme }) => theme.colors.codrive_green};
`;
