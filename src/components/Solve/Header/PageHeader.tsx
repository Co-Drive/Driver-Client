import { useState } from 'react';
import styled, { css } from 'styled-components';
import SaveModal from '../../../common/Modal/Modal';
import { PageHeaderProps } from '../../../types/Solve/solveTypes';

const BTN_CONTENTS = ['임시저장', '등록하기'];

const PageHeader = ({ codeblocks, questionInfo }: PageHeaderProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { title, level, tags, platform, problemUrl } = questionInfo;
  const isEmptyCode = codeblocks.map((v) => v.code.length === 0).includes(true);
  const DATA = {
    title: title,
    level: level,
    tags: tags,
    platform: platform,
    problemUrl: problemUrl,
    // id 제외, 나머지 값만 저장하기
    codeblocks: codeblocks.map(({ id, ...rest }) => rest),
  };

  const handleClickBtn = (isSaveBtn: boolean) => {
    if (isSaveBtn) setModalOpen(true);
    // 서버 통신 코드로 바꿀 예정
    console.log(DATA);
  };

  return (
    <PageHeaderContainer>
      <Text>오늘 푼 문제 등록하기</Text>

      <BtnContainer>
        {BTN_CONTENTS.map((content) => {
          const saveBtn = content === '임시저장';
          const disabledSave = !title || !level;
          const disabledSubmit =
            !title ||
            !level ||
            !tags.length ||
            !platform ||
            !problemUrl ||
            isEmptyCode;
          return (
            <Button
              key={content}
              type="submit"
              $disabled={saveBtn ? disabledSave : disabledSubmit}
              $submitBtn={!saveBtn}
              onClick={() =>
                (saveBtn ? !disabledSave : !disabledSubmit) &&
                handleClickBtn(saveBtn)
              }
            >
              {content}
            </Button>
          );
        })}
      </BtnContainer>
      {modalOpen && <SaveModal onClose={() => setModalOpen(false)} />}
    </PageHeaderContainer>
  );
};

export default PageHeader;

const PageHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: end;

  width: 100%;
`;

const Text = styled.p`
  margin-bottom: 0.8rem;

  ${({ theme }) => theme.fonts.title_bold_26};
  color: ${({ theme }) => theme.colors.white};
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button<{ $disabled: boolean; $submitBtn: boolean }>`
  padding: 1rem 2rem;

  border-radius: 0.8rem;

  ${({ theme, $disabled, $submitBtn }) =>
    $disabled
      ? css`
          background-color: ${theme.colors.gray700};
          color: ${theme.colors.gray300};
        `
      : $submitBtn
        ? css`
            background-color: ${theme.colors.codrive_green};
            color: ${theme.colors.gray900};
          `
        : css`
            background-color: ${theme.colors.gray500};
            color: ${theme.colors.gray100};
          `};
  ${({ theme, $disabled }) =>
    $disabled ? theme.fonts.body_ligth_16 : theme.fonts.title_bold_16};
`;
