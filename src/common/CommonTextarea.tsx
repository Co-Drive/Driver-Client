import styled from 'styled-components';
import { CommonTextareaProps } from '../types/\bCommonTextarea/TextareaType';

const CommonTextarea = ({
  category,
  handleChangeInputs,
}: CommonTextareaProps) => {
  const PLACEHOLDER = [
    '그룹에 대해서 간단하게 설명해주세요',
    '진행 방식을 설명해주세요',
  ];
  const textareaType = category === 'group';

  return (
    <CommonTextareaWrapper $textareaType={textareaType}>
      <Textarea
        id={category}
        name={category}
        placeholder={textareaType ? PLACEHOLDER[0] : PLACEHOLDER[1]}
        onChange={handleChangeInputs}
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

const Textarea = styled.textarea`
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
  margin: 2rem;

  resize: none;
  outline: none;

  border: none;
  background-color: ${({ theme }) => theme.colors.gray700};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_ligth_16};

  word-break: keep-all;
`;
