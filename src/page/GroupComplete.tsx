import styled from 'styled-components';
import PageLayout from '../components/PageLayout/PageLayout';

const GroupComplete = () => {
  return (
    <PageLayout category={'group_create'}>
      <WrapperContainer>
        <div>GroupComplete</div>
        <p>비밀번호 : 아자아자 화아팅</p>
        <div>
          <div>썸네일 테스트</div>
        </div>
        <div>
          <button>링크 복사하기</button>
          <button>그룹 바로가기</button>
        </div>
      </WrapperContainer>
    </PageLayout>
  );
};

export default GroupComplete;

const WrapperContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: pink;
`;

const HeaderContainer = styled.h1`
  background-color: blue;
`;
