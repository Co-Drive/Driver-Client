import styled from 'styled-components';
import { IcCancelSmall } from '../assets';
import { CommonHashTagProps } from './../types/CommonHashTag/inputType';

const CommonHashTag = ({ selectedTag, removeTag }: CommonHashTagProps) => (
  <TagContainer onClick={removeTag}>
    {selectedTag}
    <IcCancelSmall />
  </TagContainer>
);

const TagContainer = styled.span`
  /* inline-flex로 변경해서 내용에 따라 크기가 조절되도록 함 */
  display: inline-flex;
  align-items: center;

  padding: 0.4rem 0.8rem;
  margin-right: 1rem;

  border-radius: 0.4rem;
  ${({ theme }) => theme.fonts.body_eng_medium_12};
  background-color: ${({ theme }) => theme.colors.codrive_green};
  color: ${({ theme }) => theme.colors.bg};
`;

export default CommonHashTag;
