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

  padding: 0 24.3rem 2.6rem 0;
  margin-bottom: 3.2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
`;

const NameTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const Name = styled.p`
  margin-left: 10.6rem;

  color: ${({ theme }) => theme.colors.gray100};

  ${({ theme }) => theme.fonts.body_medium_16};
`;

export default NameInfo;
