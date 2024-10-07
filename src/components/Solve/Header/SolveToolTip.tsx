import styled from 'styled-components';
import {
  IcCancelSmallWhite,
  IcLevelFive,
  IcLevelFour,
  IcLevelOne,
  IcLevelThree,
  IcLevelTwo,
} from '../../../assets';
import ModalPortal from '../../../common/Modal/ModalPortal';

const TooltipData = [
  {
    star: <IcLevelOne />,
    rank: 'Bronze',
    level: 'Level 1',
    swea: 'D1 - D2',
    letCode: 'Easy',
    hackerRank: 'Easy',
  },
  {
    star: <IcLevelTwo />,
    rank: 'Sliver',
    level: 'Level 2',
    swea: 'D2 - D3',
    letCode: 'Easy',
    hackerRank: 'Easy',
  },
  {
    star: <IcLevelThree />,
    rank: 'Gold',
    level: 'Level 2',
    swea: 'D4',
    letCode: 'Medium',
    hackerRank: 'Medium',
  },
  {
    star: <IcLevelFour />,
    rank: 'Platinum',
    level: 'Level 3',
    swea: 'D5',
    letCode: 'Medium',
    hackerRank: 'Medium',
  },
  {
    star: <IcLevelFive />,
    rank: '그 이상',
    level: '그 이상',
    swea: 'D6 - D8',
    letCode: 'Hard',
    hackerRank: 'Hard',
  },
];

interface SolveToopTipProps {
  isOpen: boolean;
  handleClose: () => void;
}

const SolveToolTip = ({ isOpen, handleClose }: SolveToopTipProps) => {
  return (
    <>
      {isOpen && (
        <ModalPortal>
          <ModalContainer onClick={handleClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <Header>
                <Title>문제 풀이 가이드</Title>
                <CloseButton typeof="button" onClick={handleClose}>
                  <IcCancelSmallWhite />
                </CloseButton>
              </Header>
              <DataTable>
                {TooltipData.map((data, idx) => (
                  <TableRow key={idx}>
                    <Stars>{data.star}</Stars>
                    <DataContent $contentType="백준">
                      <Name>백준</Name>
                      {data.rank}
                    </DataContent>
                    <DataContent $contentType="프로그래머스">
                      <Name>프로그래머스</Name>
                      {data.level}
                    </DataContent>
                    <DataContent $contentType="SWEA">
                      <Name>SWEA</Name>
                      {data.swea}
                    </DataContent>
                    <DataContent $contentType="리트코드">
                      <Name>리트코트</Name>
                      {data.letCode}
                    </DataContent>
                    <DataContent $contentType="해커랭크">
                      <Name>해커랭크</Name>
                      {data.hackerRank}
                    </DataContent>
                  </TableRow>
                ))}
              </DataTable>
            </ModalContent>
          </ModalContainer>
        </ModalPortal>
      )}
    </>
  );
};

export default SolveToolTip;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.title_bold_14};
  margin-right: 55.9rem;
  margin-left: 1rem;
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 3rem;
  justify-content: end;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 90%);
`;

const ModalContent = styled.div`
  position: relative;

  padding: 3rem;
  bottom: 16.8rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const DataTable = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.6rem;
`;

const TableRow = styled.div`
  display: flex;

  padding: 1.7rem 2.8rem 2.2rem 1.8rem;
  gap: 4rem;
  background-color: ${({ theme }) => theme.colors.gray700};

  border-radius: 0.8rem;
`;

const Stars = styled.div`
  display: flex;

  margin-right: 3.5rem;
`;

const DataContent = styled.div<{ $contentType?: string }>`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_regular_14};
  white-space: nowrap;
  gap: 1rem;
  width: ${({ $contentType }) => {
    switch ($contentType) {
      case '백준':
        return '4.9rem';
      case '프로그래머스':
        return '7.3rem';
      case 'SWEA':
        return '5.5rem';
      case '리트코트':
        return '4.9rem';
      case '해커랭크':
        return '5.7rem';
      default:
    }
  }};
`;

const Name = styled.p`
  ${({ theme }) => theme.fonts.title_semiBold_14};
  color: ${({ theme }) => theme.colors.gray200};
`;
