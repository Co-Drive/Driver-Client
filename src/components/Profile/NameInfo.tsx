import styled from 'styled-components';
import { NameInfoProps } from '../../types/Profile/ProfileType';

const NameInfo = ({ user }: NameInfoProps) => {
  return (
    <NameInfoContainer>
      <NameTitle>이름</NameTitle>
      <Name>{user}</Name>
    </NameInfoContainer>
  );
};

const NameInfoContainer = styled.section`
  display: flex;
  align-items: center;

  padding-bottom: 2.5rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;

const NameTitle = styled.h2`
  margin-right: 10.5rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const Name = styled.p`
  color: ${({ theme }) => theme.colors.gray100};

  ${({ theme }) => theme.fonts.body_medium_16};
`;

export default NameInfo;
