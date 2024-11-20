import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { IcArrowRightBig, IcInformation } from '../../../assets';
import useGetTempRecords from '../../../libs/hooks/Solution/useGetTempRecords';
import LoadingPage from '../../../page/LoadingPage';
import Level from '../Level';

const TempSave = () => {
  const [clickedPage, setClickedPage] = useState(1);

  const navigate = useNavigate();
  const { data, isLoading } = useGetTempRecords(clickedPage - 1);
  const { totalPage, records } = !isLoading && data.data;
  const { createdAt, level, recordId, title } =
    (!isLoading && records[0]) || {};
  const tempArr = Array.from({ length: totalPage }, (_, idx) => idx + 1);
  const isTempExit = !(records && records.length === 0);

  const handleClickSavedSolutionNum = (clickedNum: number) => {
    setClickedPage(clickedNum);
  };

  const handleClickWriteBtn = () => {
    navigate('/solve', {
      state: { recordId, isTemp: true },
      replace: true,
    });
  };

  return (
    <>
      {isLoading ? (
        <LoadingPage isPageLoading={true} />
      ) : (
        isTempExit && (
          <TempSaveContainer>
            <Header>
              <HeaderTxtContainer>
                <HeaderTxt>현재 작성하고 있는 문제</HeaderTxt>
                <InformationContainer>
                  <Tooltip>
                    <Notice>문제풀이 임시저장은 총</Notice>
                    <Point>3개</Point>
                    <Notice>까지 가능합니다</Notice>
                  </Tooltip>
                  <IcInformation />
                </InformationContainer>
              </HeaderTxtContainer>

              <SavedSolutionList>
                {tempArr.map((num) => {
                  return (
                    <SavedSolutionNum
                      key={num}
                      $isActive={clickedPage === num}
                      $isFirstNum={num === 1}
                      onClick={() => handleClickSavedSolutionNum(num)}
                    >
                      {num}
                    </SavedSolutionNum>
                  );
                })}
              </SavedSolutionList>
            </Header>
            <QuestionContainer>
              <TopInfo>
                <Title>{title}</Title>
                <DateContainer>
                  <DateTxt>임시저장</DateTxt>
                  <DateTxt>|</DateTxt>
                  <Date>{createdAt}</Date>
                </DateContainer>
              </TopInfo>

              <Level level={level} />
            </QuestionContainer>
            <WriteBtn type="button" onClick={handleClickWriteBtn}>
              <BtnTxt>마저 작성하러 가기</BtnTxt>
              <IcArrowRightBig />
            </WriteBtn>
          </TempSaveContainer>
        )
      )}
    </>
  );
};

export default TempSave;

const TempSaveContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  margin-top: 3.4rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 2.6rem 2.2rem 2.2rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;

const HeaderTxtContainer = styled.div`
  display: flex;
  gap: 0.9rem;
  align-items: center;
`;

const HeaderTxt = styled.span`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const InformationContainer = styled.div`
  position: relative;

  &:hover > div {
    visibility: visible;

    margin: -0.3rem 0 0 -0.2rem;
    opacity: 1;
  }
`;

const Tooltip = styled.div`
  display: flex;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2.9rem;
  left: -0.6rem;
  visibility: hidden;

  width: fit-content;
  padding: 1.2rem 1.1rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray600};

  white-space: nowrap;

  transition: opacity 0.3s ease-in-out;

  &::after {
    position: absolute;
    top: 3.8rem;
    left: 1.2rem;

    border-color: ${({ theme }) => theme.colors.gray600} transparent transparent;
    border-width: 5px;
    border-style: solid;
    content: '';
  }
`;

const Notice = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_ligth_12};
`;

const Point = styled.p`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.body_ligth_12};
`;

const SavedSolutionList = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const SavedSolutionNum = styled.span<{
  $isActive: boolean;
  $isFirstNum: boolean;
}>`
  padding: ${({ $isFirstNum }) =>
    $isFirstNum ? `0.25rem 0.7rem` : `0.25rem 0.6rem`};

  border-radius: 1rem;

  ${({ $isActive }) =>
    $isActive
      ? css`
          background-color: ${({ theme }) => theme.colors.gray500};
          color: ${({ theme }) => theme.colors.gray100};
        `
      : css`
          background-color: ${({ theme }) => theme.colors.gray700};
          color: ${({ theme }) => theme.colors.gray500};
        `};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;

const QuestionContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;

  padding: 2.4rem 2.2rem 3.2rem 2.4rem;
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_20};
`;

const DateContainer = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const DateTxt = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;

const Date = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;

const WriteBtn = styled.button`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 1.2rem 0;
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;

  background-color: ${({ theme }) => theme.colors.codrive_green};
`;

const BtnTxt = styled.p`
  color: ${({ theme }) => theme.colors.gray900};
  ${({ theme }) => theme.fonts.title_semiBold_18};
`;
