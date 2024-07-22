import styled from 'styled-components';
import HeaderTop from './HeaderTop';

interface CodeSpaceHeaderProps {
  handleClickLv: (clickedLv: number) => void;
}

const CodeSpaceHeader = ({ handleClickLv }: CodeSpaceHeaderProps) => {
  return (
    <Header>
      <HeaderTop handleClickLv={handleClickLv} />
    </Header>
  );
};

export default CodeSpaceHeader;

const Header = styled.header`
  display: flex;
  gap: 2.2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 92.4rem;
`;
