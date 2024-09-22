import styled from 'styled-components';

const Top3Members = () => {
  return (
    <Top3MembersContainer>
      <Img src="https://velog.velcdn.com/images/aroo_ming/post/0c5e3410-d452-431f-9a9e-e8e7a8dfed43/image.png" />
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
