import styled from 'styled-components';
import { IcInformation } from '../../../assets';

interface NumOfMembersProps {
  numOfMembers: {
    memberCount: number;
    capacity: number;
    approvedCount: number;
    requestedCount: number;
  };
}

const NumOfMembers = ({ numOfMembers }: NumOfMembersProps) => {
  const { memberCount, capacity, approvedCount, requestedCount } = numOfMembers;

  // 빌드 에러 방지를 위한 콘솔 (추후 툴팁에 넣을 애들)
  console.log(approvedCount, requestedCount);

  return (
    <NumOfMembersContainer>
      <TitleContainer>
        <Title>그룹 인원</Title>
        <IcInformation />
      </TitleContainer>

      <Counter>
        <Members>{memberCount}</Members>
        <Slash>/</Slash>
        <CapacityContainer>
          <Capacity>{capacity}</Capacity>
          <CapacityText>명</CapacityText>
        </CapacityContainer>
      </Counter>
    </NumOfMembersContainer>
  );
};

export default NumOfMembers;

const NumOfMembersContainer = styled.article`
  display: flex;
  flex-direction: column;

  margin-right: 4.6rem;
`;

const TitleContainer = styled.header`
  display: flex;
  gap: 5.2rem;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  margin-bottom: 2rem;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.title_bold_14};
`;

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`;

const Members = styled.p`
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_46};
`;

const Slash = styled.p`
  margin-bottom: -1rem;
  margin-left: 0.8rem;

  color: ${({ theme }) => theme.colors.gray300};
  font-weight: 300;
  font-size: 6.5rem;
`;

const CapacityContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
`;

const Capacity = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.title_semiBold_18};
`;
const CapacityText = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.title_semiBold_18};
`;
