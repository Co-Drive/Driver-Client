import styled from 'styled-components';
import { PLACEHOLDER } from '../constants/CommonTextarea/textareaConst';
import { CommonTextareaProps } from '../types/CommonTextarea/TextareaType';

const CommonTextarea = ({
  category,
  value,
  handleChangeTextarea,
}: CommonTextareaProps) => {
  const isGroupType = category === 'group';

  return (
    <CommonTextareaWrapper $textareaType={isGroupType}>
      <Textarea
        id={category}
        name={category}
        placeholder={isGroupType ? PLACEHOLDER[0] : PLACEHOLDER[1]}
        value={value}
        onChange={handleChangeTextarea}
      ></Textarea>
    </CommonTextareaWrapper>
  );
};

export default CommonTextarea;

const CommonTextareaWrapper = styled.article<{ $textareaType: boolean }>`
  width: 61.1rem;
  height: ${({ $textareaType }) => ($textareaType ? '30rem' : '10rem')};

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
  ${({ theme }) => theme.fonts.body_medium_16};
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    ${({ theme }) => theme.fonts.body_ligth_16};
    color: ${({ theme }) => theme.colors.gray300};
  }

  word-break: keep-all;
`;
