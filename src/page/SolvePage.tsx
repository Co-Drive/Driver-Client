import { useState } from 'react';
import styled from 'styled-components';
import { IcAddFill } from '../assets';
import CodeSpace from '../components/Solve/CodeSpace';
import {
  handleChangeCodeProps,
  handleClickQuestionInfoProps,
} from '../types/Solve/solveTypes';

const SolvePage = () => {
  const [questionInfo, setQuestionInfo] = useState({
    title: '',
    level: 0,
    type: [],
    platform: '',
    link: '',
  });

  const [ide, setIde] = useState({
    ideId: 0,
    ideItems: [{ id: 0, code: '// code', memo: '' }],
  });

  // const { title, level, type, platform, link } = questionInfo;
  const { ideId, ideItems } = ide;

  const handleClickQuestionInfo = ({
    category,
    e,
  }: handleClickQuestionInfoProps) => {
    const { value } = e.currentTarget;
    setQuestionInfo({
      ...questionInfo,
      [category]: value,
    });
  };

  const handleChangeCode = ({ newCode, stringId }: handleChangeCodeProps) => {
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
      code: '// code',
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

  const handleClickGoTopBtn = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <SolvePageContainer>
      <CodeSpace
        ideItems={ideItems}
        questionInfo={questionInfo}
        handleClickQuestionInfo={handleClickQuestionInfo}
        handleClickDeleteBtn={handleClickDeleteBtn}
        handleChangeCode={handleChangeCode}
        handleChangeMemo={handleChangeMemo}
      />

      <AddBtnContainer>
        <IcAddFill onClick={handleClickAddBtn} />
      </AddBtnContainer>
      {ideId > 0 && (
        <GoTopBtn type="button" onClick={handleClickGoTopBtn}>
          위로
        </GoTopBtn>
      )}
    </SolvePageContainer>
  );
};

export default SolvePage;

const SolvePageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 6rem 25.7rem 20rem;
`;

const AddBtnContainer = styled.div`
  display: flex;
  justify-content: end;

  width: 100%;
  margin-top: 1.8rem;
`;

const GoTopBtn = styled.button`
  padding: 3rem;
  margin-top: 1rem;

  background-color: ${({ theme }) => theme.colors.codrive_green};
  color: black;
`;
