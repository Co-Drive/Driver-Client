import styled from 'styled-components';
import { IcInformation } from '../../../assets';
import { NumOfMembersProps } from '../../../types/Admin/adminType';
import Tooltip from './Tooltip';

const NumOfMembers = ({ numOfMembers }: NumOfMembersProps) => {
  const { memberCount, capacity, approvedCount, requestedCount } = numOfMembers;

  return (
    <NumOfMembersContainer>
      <TitleContainer>
        <Title>그룹 인원</Title>
        <IcInformation />
        <Tooltip
          requestedCount={requestedCount}
          approvedCount={approvedCount}
        />
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
  position: relative;

  width: 100%;
  margin-bottom: 2rem;

  &:hover > div {
    visibility: visible;
    z-index: 1;

    margin-left: 5rem;
    opacity: 1;
  }
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.title_bold_14};

  white-space: nowrap;
`;

const Counter = styled.div`
  display: flex;
  justify-content: center;
`;

const Members = styled.p`
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_46};
`;

const Slash = styled.p`
  margin-top: 1rem;
  margin-left: 0.8rem;

  color: ${({ theme }) => theme.colors.gray300};
`;

const CapacityContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;

  margin-top: 4.3rem;
`;

const Capacity = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.title_semiBold_18};
`;
const CapacityText = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.title_semiBold_18};
`;
