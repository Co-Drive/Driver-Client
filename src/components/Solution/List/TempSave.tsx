import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { IcArrowRightBig } from '../../../assets';
import { getTempRecords } from '../../../libs/apis/Solution/getTempRecords';
import {
  UpdateRecordsProps,
  UpdateTotalPageProps,
} from '../../../types/Solution/solutionTypes';
import Level from '../Level';

const TempSave = () => {
  const totalPageRef = useRef(0);

  const [clickedNum, setClickedNum] = useState(1);
  const [tempRecords, setTempRecords] = useState({
    tempRecordId: 0,
    tempTitle: '',
    tempLevel: 0,
    tempCreatedAt: '',
  });

  const { tempRecordId, tempTitle, tempLevel, tempCreatedAt } = tempRecords;

  const tempArr = Array.from(
    { length: totalPageRef.current },
    (_, idx) => idx + 1
  );

  const handleClickSavedSolutionNum = (clickedNum: number) => {
    setClickedNum(clickedNum);
  };

  const getRecords = async () => {
    const { data } = await getTempRecords(clickedNum);
    updateTotalPage({ data });
    updateRecords({ data });
  };

  const updateTotalPage = async ({ data }: UpdateTotalPageProps) => {
    const { totalPage } = data;
    totalPageRef.current = totalPage - 1;
  };

  const updateRecords = async ({ data }: UpdateRecordsProps) => {
    const { records } = data;
    const { recordId, title, level, createdAt } = records[0];

    setTempRecords({
      tempRecordId: recordId,
      tempTitle: title,
      tempLevel: level,
      tempCreatedAt: createdAt,
    });
  };

  useEffect(() => {
    getRecords();
  }, [totalPageRef, tempRecords, clickedNum]);

  return (
    <TempSaveContainer>
      <Header>
        <HeaderTxt>현재 작성하고 있는 문제</HeaderTxt>
        <SavedSolutionList>
          {tempArr.map((num) => {
            return (
              <SavedSolutionNum
                key={num}
                $isActive={clickedNum === num}
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
          <Title>{tempTitle}</Title>
          <DateContainer>
            <DateTxt>임시저장</DateTxt>
            <DateTxt>|</DateTxt>
            <Date>{tempCreatedAt}</Date>
          </DateContainer>
        </TopInfo>

        <Level level={tempLevel} />
      </QuestionContainer>
      <WriteBtn type="button">
        <BtnTxt>마저 작성하러 가기</BtnTxt>
        <IcArrowRightBig />
      </WriteBtn>
    </TempSaveContainer>
  );
};

export default TempSave;

const TempSaveContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 2.6rem 2.2rem 2.2rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;

const HeaderTxt = styled.span`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.title_bold_16};
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
