import styled from 'styled-components';

const Top3Members = () => {
  return (
    <Top3MembersContainer>
      <Img src="../../../top3member.png" />
    </Top3MembersContainer>
  );
};

export default Top3Members;

const Top3MembersContainer = styled.div`
  margin-top: 1.8rem;
`;

const Img = styled.img`
  width: 100%;
  height: 21.6rem;
`;
