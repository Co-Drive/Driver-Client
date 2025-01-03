import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IcAddFill, IcAddFillDisabled, IcArrowUpBig } from '../assets';
import PageLayout from '../components/PageLayout/PageLayout';
import CodeSpace from '../components/Solve/CodeSpace';
import PageHeader from '../components/Solve/Header/PageHeader';
import useGetRecords from '../libs/hooks/Solution/useGetRecords';
import {
  ClickQuestionInfoProps,
  CodeProps,
  QuestionInfoProps,
} from '../types/Solve/solveTypes';

import SaveCheckModal from '../common/Modal/SaveCheckModal/SaveCheckModal';
import useScrollAnimation from '../libs/hooks/utils/useScrollAnimation';
import { handleClickGoTopBtn } from '../utils/handleClickGoTopBtn';

const SolvePage = () => {
  const { state } = useLocation();
  const { recordId, isTemp } = state || {};
  const { data, isLoading } = useGetRecords(recordId) || {};
  const scrollAnimation = useScrollAnimation();

  const [isCommitSuccess, setIsCommitSuccess] = useState(false);
  const [isOpenOptions, setIsOpenOptions] = useState(true);
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

  const handleCommitSuccess = (isSuccess: boolean) => {
    setIsCommitSuccess(isSuccess);
  };

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

  useEffect(() => {
    if (recordId && !isLoading) {
      const { title, level, tags, platform, problemUrl, codeblocks } =
        data.data;

      setQuestionInfo({
        title: title,
        level: level,
        tags: tags,
        platform: platform,
        problemUrl: problemUrl,
      });

      setIde({
        ideId: 0,
        ideItems: codeblocks.map(
          (
            codeblock: { id: number; code: string; memo: string },
            idx: number
          ) => ({
            id: idx,
            code: codeblock.code,
            memo: codeblock.memo,
          })
        ),
      });
    }
  }, [data]);

  return (
    <PageLayout category="문제풀이">
      {ideId > 0 && (
        <motion.div style={{ opacity: 0 }} animate={scrollAnimation}>
          <GoTopBtn type="button" onClick={handleClickGoTopBtn}>
            <IcArrowUpBig />
          </GoTopBtn>
        </motion.div>
      )}
      <SolvePageContainer>
        <PageHeader
          id={recordId}
          isTemp={isTemp}
          codeblocks={ideItems}
          questionInfo={questionInfo}
          handleCommitSuccess={handleCommitSuccess}
          handleOpenOptions={(isOpen) => setIsOpenOptions(isOpen)}
        />

        <CodeSpace
          ideItems={ideItems}
          questionInfo={questionInfo}
          isOpenOptions={isOpenOptions}
          handleClickQuestionInfo={handleClickQuestionInfo}
          handleClickDeleteBtn={handleClickDeleteBtn}
          handleChangeCode={handleChangeCode}
          handleChangeMemo={handleChangeMemo}
        />

        <AddBtnContainer>
          {ideItems && ideItems[ideItems.length - 1].code.length ? (
            <IcAddFill onClick={handleClickAddBtn} />
          ) : (
            <IcAddFillDisabled />
          )}
        </AddBtnContainer>
      </SolvePageContainer>

      {isCommitSuccess && <SaveCheckModal isCommit={true} />}
    </PageLayout>
  );
};

export default SolvePage;

const SolvePageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 92.6rem;
  padding: 6rem 0 33.2rem;
`;

const AddBtnContainer = styled.button`
  display: flex;
  justify-content: end;

  width: 100%;
  margin: 1.8rem 25.7rem 0;
`;

const GoTopBtn = styled.button`
  position: fixed;
  top: calc(100vh - 15rem);
  left: calc(100vw - 22.3rem);
`;
