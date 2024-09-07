import styled from 'styled-components';
import { IcCancelSmallWhite, IcWarning } from '../../../assets';
import { WarningModalProps } from '../../../types/Modal/modalType';

const WarningMoalForm = ({
  isGroupStatusModal,
  data,
  onClose,
  handleClickContinueBtn,
}: WarningModalProps) => {
  const topWarning = isGroupStatusModal
    ? '정말 그룹 상태를'
    : `정말 [${data}] 님을`;
  const bottomWarning = isGroupStatusModal
    ? `[ ${data} ] ${data === '활동 종료' ? '로' : '으로'} 변경하시겠습니까?`
    : '내보내시겠습니까?';

  const handleClickBg = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget === e.target && onClose) {
      onClose();
    }
  };

  return (
    <ModalFormConatiner onClick={handleClickBg}>
      <ContentsContainer>
        <IcCancelContainer onClick={onClose}>
          <IcCancelSmallWhite />
        </IcCancelContainer>

        <IcWarning />
        <WarningContainer $data={data}>
          <Warning>{topWarning}</Warning>
          <Warning>{bottomWarning}</Warning>
        </WarningContainer>

        <BtnContainer>
          <StopBtn type="button" onClick={onClose}>
            아니오
          </StopBtn>
          <ContinueBtn type="button" onClick={handleClickContinueBtn}>
            예
          </ContinueBtn>
        </BtnContainer>
      </ContentsContainer>
    </ModalFormConatiner>
  );
};

export default WarningMoalForm;

const ModalFormConatiner = styled.section`
  position: fixed;
  top: 11.6rem;
  z-index: 10;

  width: 100%;
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

const WarningContainer = styled.div<{ $data: string }>`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: ${({ $data }) => {
    switch ($data) {
      case '활동 종료':
        return '0 2.6rem 0 2.7rem';
      case '모집마감':
        return '0 2.05rem 0 2.15rem';
      case '모집 중':
        return '0 2.55rem 0 2.65rem';
      default:
        return '0 2.8rem';
    }
  }};
  margin: 1.2rem 0 3.2rem;
`;

const Warning = styled.p`
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_16};
  white-space: nowrap;
`;

const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
`;

const commonBtnStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_14};
`;

const StopBtn = styled(commonBtnStyle)`
  border-bottom-left-radius: 1.2rem;

  padding: 1.3rem 2.8rem 1.6rem 3rem;

  background-color: ${({ theme }) => theme.colors.gray600};
`;

const ContinueBtn = styled(commonBtnStyle)`
  border-bottom-right-radius: 1.2rem;

  padding: 1.3rem 4.8rem 1.6rem 5rem;

  background-color: ${({ theme }) => theme.colors.gray700};
`;
