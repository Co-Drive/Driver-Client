import styled from 'styled-components';
import { IcLinkWhite } from '../../assets';

const LinkCopyModal = () => {
  return (
    <LinkCopyModalContainer>
      <IcLinkWhite />
      <Text>링크가 복사되었습니다</Text>
    </LinkCopyModalContainer>
  );
};

export default LinkCopyModal;

const LinkCopyModalContainer = styled.article`
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: fit-content;
  padding: 2.6rem 3rem 2.6rem 2.6rem;
  margin: 20.4rem 60rem 0;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;
