import styled from 'styled-components';
import { IcTop3Member } from '../../assets';

const Top3Members = () => {
  return (
    <Top3MembersContainer>
      <IcTop3Member />
    </Top3MembersContainer>
  );
};

export default Top3Members;

const Top3MembersContainer = styled.div`
  margin-top: 1.8rem;
`;
