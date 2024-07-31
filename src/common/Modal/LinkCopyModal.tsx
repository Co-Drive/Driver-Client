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

  padding: 2.6rem 2.6rem 2.6rem 3rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;
