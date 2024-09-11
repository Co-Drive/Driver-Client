import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcCancelSmallWhite, IcWarning } from '../../../assets';
import { ErrorModalProps } from '../../../types/Modal/modalType';

const ErrorModalForm = ({ callbackPage, errMsg, onClose }: ErrorModalProps) => {
  const navigate = useNavigate();
  const handleClickBg = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget === e.target && onClose) {
      onClose();
    }
  };

  const handleClickCheckBtn = () => {
    if (callbackPage) {
      navigate(callbackPage);
    }
    onClose();
  };

  return (
    <ModalFormConatiner onClick={handleClickBg}>
      <ContentsContainer>
        <IcCancelContainer onClick={onClose}>
          <IcCancelSmallWhite />
        </IcCancelContainer>

        <IcWarning />
        <WarningContainer>
          <Warning>{errMsg}</Warning>
        </WarningContainer>

        <CheckBtn type="button" onClick={handleClickCheckBtn}>
          확인
        </CheckBtn>
      </ContentsContainer>
    </ModalFormConatiner>
  );
};

export default ErrorModalForm;

const ModalFormConatiner = styled.section`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 11.6rem;

  width: 100vw;
  height: calc(100vh - 11.6rem);

  background-color: rgb(11 12 15 / 66%);
`;

const ContentsContainer = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  min-width: 26.9rem;

  width: fit-content;
  height: fit-content;
  padding-top: 2.2rem;
  margin: 22rem 58.5rem 0;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const IcCancelContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const WarningContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 0 2rem;
  margin: 1.2rem 0 3.2rem;
`;

const Warning = styled.p`
  word-break: keep-all;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_16};
  text-align: center;

  white-space: break-spaces;
`;

const CheckBtn = styled.button`
  width: 100%;
  padding: 1.3rem 0 1.6rem;
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;

  background-color: ${({ theme }) => theme.colors.gray700};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_14};
  text-align: center;
`;
