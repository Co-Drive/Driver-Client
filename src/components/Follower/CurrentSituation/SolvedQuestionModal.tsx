import styled from 'styled-components';
import { IcLinkWhite, IcStarMiniGray, IcStarMiniYellow } from '../../../assets';
import { CLICKED_DUMMY } from '../../../constants/Follower/currentConst';

const SolvedQuestionModal = () => {
  const { questions } = CLICKED_DUMMY;

  const handleclickLink = (link: string) => {
    window.open(link);
  };

  return (
    <ModalContainer>
      {questions.map((question, idx) => {
        const { name, level, platform, link } = question;
        const paintedStarArr = Array(level)
          .fill(1)
          .concat(Array(5 - level).fill(0));

        return (
          <QuestionContainer key={idx}>
            <Name>{name}</Name>
            <DetailContainer>
              <LvStarContainer>
                {paintedStarArr.map((painted, idx) => {
                  return (
                    <li key={idx}>
                      {painted ? <IcStarMiniYellow /> : <IcStarMiniGray />}
                    </li>
                  );
                })}
              </LvStarContainer>

              <LinkBtn type="button" onClick={() => handleclickLink(link)}>
                <IcLinkWhite />
                <Platform>{platform}</Platform>
              </LinkBtn>
            </DetailContainer>
          </QuestionContainer>
        );
      })}
    </ModalContainer>
  );
};

export default SolvedQuestionModal;

const ModalContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 12.9rem;

  max-height: 50rem;
  overflow-y: auto;

  z-index: 1;

  padding: 1.2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const QuestionContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;

  padding: 1.8rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray500};
`;

const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_20};
`;

const DetailContainer = styled.div`
  display: flex;
  gap: 1.3rem;
  justify-content: space-between;
  align-items: center;
`;

const LvStarContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkBtn = styled.button`
  display: flex;
  gap: 0.6rem;
  justify-content: space-between;
  align-items: center;

  padding: 0.6rem 1.4rem 0.6rem 0.9rem;

  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colors.gray600};
`;

const Platform = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_medium_14};

  white-space: nowrap;
`;
