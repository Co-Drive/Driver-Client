import styled from 'styled-components';
import { LANGUAGES } from '../../constants/SelectBox/OptionsConst';
import { OptionsProps } from '../../types/Register/RegisterType';

const Options = ({ onSelectOption }: OptionsProps) => {
  return (
    <OptionsContainer>
      {LANGUAGES.map((option) => (
        <Option key={option} onClick={() => onSelectOption(option)}>
          {option}
        </Option>
      ))}
    </OptionsContainer>
  );
};

const OptionsContainer = styled.div`
  position: absolute;

  width: 29.6rem;
  margin-top: 0.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};

  text-align: center;
  max-height: 34.8rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Option = styled.div`
  padding: 1.2rem;
  margin: 0.6rem 0.8rem;

  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.body_eng_medium_16};
  cursor: pointer;

  &:hover {
    border-radius: 0.6rem;
    background-color: ${({ theme }) => theme.colors.gray500};
  }
`;

export default Options;
