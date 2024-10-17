import styled from 'styled-components';

const RankingTooltip = () => {
  return (
    <TooltipContainer>
      <Contents $isImportantContents={true}>
        *랭킹 순위는 매주 업데이트 됩니다
      </Contents>
      <Contents $isImportantContents={false}>
        문제풀이 개수가 같다면 랜덤으로 순위가 결정됩니다
      </Contents>
    </TooltipContainer>
  );
};

export default RankingTooltip;

const TooltipContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  position: absolute;
  top: 2.6rem;
  left: 0;
  z-index: 1;

  width: fit-content;
  padding: 1.2rem 1.1rem;

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.gray600};

  transform: translate(-2.5%);
  transition: opacity 0.3s ease-in-out;

  &::after {
    position: absolute;
    bottom: 100%;

    border-color: transparent transparent ${({ theme }) => theme.colors.gray600};
    border-width: 5px;
    border-style: solid;
    content: '';
  }
`;

const Contents = styled.div<{ $isImportantContents: boolean }>`
  color: ${({ theme, $isImportantContents }) =>
    $isImportantContents ? theme.colors.codrive_green : theme.colors.white};
  ${({ theme }) => theme.fonts.body_ligth_12};

  white-space: nowrap;
`;
