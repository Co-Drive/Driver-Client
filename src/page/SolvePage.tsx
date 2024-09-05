import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IcAddFill, IcAddFillDisabled, IcArrowUpBig } from '../assets';
import PageLayout from '../components/PageLayout/PageLayout';
import CodeSpace from '../components/Solve/CodeSpace';
import PageHeader from '../components/Solve/Header/PageHeader';
import useGetRecords from '../libs/hooks/Solution/useGetRecords';
import { RecordsTypes } from '../types/Solution/solutionTypes';
import {
  ClickQuestionInfoProps,
  CodeProps,
  QuestionInfoProps,
} from '../types/Solve/solveTypes';
import { handleClickGoTopBtn } from '../utils/handleClickGoTopBtn';

const SolvePage = () => {
  const { state } = useLocation();
  const { recordId, isTemp } = state || {};
  const [records, setRecords] = useState<RecordsTypes>();
  const { data = [] } = recordId ? useGetRecords(recordId) : {};

  const {
    title = '',
    level = 0,
    tags = [],
    platform = '',
    problemUrl = '',
    codeblocks = [
      {
        code: '',
        memo: '',
      },
    ],
  } = records || {};

  const [opacity, setOpacity] = useState(0);
  const [questionInfo, setQuestionInfo] = useState<QuestionInfoProps>({
    title: '',
    level: 0,
    tags: [],
    platform: '',
    problemUrl: '',
  });

  const [ide, setIde] = useState({
    ideId: 0,
    ideItems: [{ id: 0, code: '', memo: '' }],
  });

  const { ideId, ideItems } = ide;

  const handleClickQuestionInfo = ({
    category,
    e,
    clickedValue,
  }: ClickQuestionInfoProps) => {
    const value = e ? e.currentTarget.value : clickedValue;
    setQuestionInfo({
      ...questionInfo,
      [category]: value,
    });
  };

  const handleChangeCode = ({ newCode, stringId }: CodeProps) => {
    const id = parseInt(stringId);

    setIde({
      ideItems: ideItems.map((item) =>
        id === item.id ? { ...item, ['code']: newCode } : item
      ),
      ideId: ideId,
    });
  };

  const handleChangeMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, name, value } = e.target;

    setIde({
      ideItems: ideItems.map((item) =>
        parseInt(id) === item.id ? { ...item, [name]: value } : item
      ),
      ideId: ideId,
    });
  };

  const handleClickAddBtn = () => {
    const lastItem = ideItems[ideItems.length - 1];
    const contents = {
      id: lastItem.id + 1,
      code: '',
      memo: '',
    };

    setIde({
      ideItems: ideItems.concat({
        ...contents,
      }),
      ideId: ideId + 1,
    });
  };

  const handleClickDeleteBtn = (id: number) => {
    setIde({
      ideItems: ideItems.filter((item) => item.id !== id),
      ideId: ideId - 1,
    });
  };

  const changeRecords = () => {
    setRecords(data.data);
  };

  if (data) {
    useEffect(() => {
      changeRecords();
    }, [data]);

    useEffect(() => {
      if (records) {
        setQuestionInfo({
          title: title,
          level: level,
          tags: tags,
          platform: platform,
          problemUrl: problemUrl,
        });

        setIde({
          ideId: 0,
          ideItems: codeblocks.map((codeblock, idx) => ({
            id: idx,
            code: codeblock.code,
            memo: codeblock.memo,
          })),
        });
      }
    }, [records]);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => setOpacity(window.scrollY));
    return () => {
      window.removeEventListener('scroll', () => setOpacity(window.scrollY));
    };
  }, []);

  return (
    <PageLayout category="문제풀이">
      {ideId > 0 && (
        <GoTopBtn
          type="button"
          onClick={handleClickGoTopBtn}
          $opacity={opacity}
        >
          <IcArrowUpBig />
        </GoTopBtn>
      )}
      <SolvePageContainer>
        <PageHeader
          id={recordId}
          isTemp={isTemp}
          codeblocks={ideItems}
          questionInfo={questionInfo}
        />

        <CodeSpace
          ideItems={ideItems}
          questionInfo={questionInfo}
          handleClickQuestionInfo={handleClickQuestionInfo}
          handleClickDeleteBtn={handleClickDeleteBtn}
          handleChangeCode={handleChangeCode}
          handleChangeMemo={handleChangeMemo}
        />

        <AddBtnContainer>
          {ideItems[ideItems.length - 1].code.length ? (
            <IcAddFill onClick={handleClickAddBtn} />
          ) : (
            <IcAddFillDisabled />
          )}
        </AddBtnContainer>
      </SolvePageContainer>
    </PageLayout>
  );
};

export default SolvePage;

const SolvePageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 6rem 25.7rem 20rem;
`;

const AddBtnContainer = styled.div`
  display: flex;
  justify-content: end;

  width: 100%;
  margin: 1.8rem 25.7rem 0;
`;

const GoTopBtn = styled.button<{ $opacity: number }>`
  opacity: ${({ $opacity }) => $opacity};

  position: fixed;
  top: calc(100vh - 15rem);
  left: calc(100vw - 22.3rem);
`;
