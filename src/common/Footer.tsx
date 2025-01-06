import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcFooterEmail, IcFooterInsta, IcFooterLogo } from '../assets';
import { handleClickLink } from '../utils/handleClickLink';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <div>
        <IcFooterLogo onClick={() => navigate('/')} />
        <FootercCopyright>
          Copyright &copy; 2024 Codrive. All Rights Reserved
        </FootercCopyright>
      </div>
      <FooterAdrress>
        <IcFooterEmail
          onClick={() => handleClickLink('mailto:codrive.co.kr@gmail.com')}
        />
        <IcFooterInsta
          onClick={() =>
            handleClickLink('https://www.instagram.com/co.drive_official/')
          }
        />
      </FooterAdrress>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;

  width: 96.2rem;
  padding: 6.3rem 3.4rem 13.3rem;

  border-top: 0.01rem solid ${({ theme }) => theme.colors.gray600};
  background-color: ${({ theme }) => theme.colors.gray900};
`;
const FootercCopyright = styled.p`
  margin-top: 1.6rem;

  color: ${({ theme }) => theme.colors.gray300};

  ${({ theme }) => theme.fonts.body_medium_14};
`;

const FooterAdrress = styled.button`
  display: flex;
  gap: 1.6rem;
`;

export default Footer;
