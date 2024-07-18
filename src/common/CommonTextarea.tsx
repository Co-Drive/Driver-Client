import styled, { css } from 'styled-components';
import { CommonTextareaProps } from '../types/\bCommonTextarea/TextareaType';

const CommonTextarea = ({
  category,
  value,
  handleChangeTextarea,
}: CommonTextareaProps) => {
  const PLACEHOLDER = [
    '그룹에 대해서 간단하게 설명해주세요',
    '진행 방식을 설명해주세요',
  ];
  const isGroupType = category === 'group';

  return (
    <CommonTextareaWrapper $textareaType={isGroupType}>
      <Textarea
        id={category}
        name={category}
        placeholder={isGroupType ? PLACEHOLDER[0] : PLACEHOLDER[1]}
        value={value}
        $disabled={value.length === 0}
        onChange={handleChangeTextarea}
      ></Textarea>
    </CommonTextareaWrapper>
  );
};

export default CommonTextarea;

const CommonTextareaWrapper = styled.article<{ $textareaType: boolean }>`
  width: 61.1rem;
  height: ${({ $textareaType }) => ($textareaType ? `10rem` : `30rem`)};

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const Textarea = styled.textarea<{ $disabled: boolean }>`
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
  margin: 2rem;

  resize: none;
  outline: none;

  border: none;
  background-color: ${({ theme }) => theme.colors.gray700};

  ${({ theme, $disabled }) =>
    $disabled
      ? css`
          ${theme.fonts.body_ligth_16}
          color: ${theme.colors.gray300}
        `
      : css`
          ${theme.fonts.body_medium_16}
          color: ${theme.colors.white}
        `};

  word-break: keep-all;
`;
