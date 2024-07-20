import styled from 'styled-components';
import { IcArrowBottomGray, IcArrowTopGray } from '../assets';

const CommonHashTag = () => {
  return (
    <CommonHashTagWrapper>
      <Select>
        <CustomSelect>
          <SelectBox>
            <Input hidden />
            <SelectedOptions>
              <Tag>
                Black<RemoveTag>&times;</RemoveTag>
              </Tag>
              <Tag>
                Java<RemoveTag>&times;</RemoveTag>
              </Tag>
              <Tag>
                Javascript<RemoveTag>&times;</RemoveTag>
              </Tag>
              <Tag>
                C++<RemoveTag>&times;</RemoveTag>
              </Tag>
              <Tag>
                C<RemoveTag>&times;</RemoveTag>
              </Tag>
              <Tag>
                C#<RemoveTag>&times;</RemoveTag>
              </Tag>
              <Tag>
                Kotlin<RemoveTag>&times;</RemoveTag>
              </Tag>
            </SelectedOptions>
            <Arrow>
              <IcArrowBottomGray />
              <IcArrowTopGray />
            </Arrow>
          </SelectBox>
          <Options>
            <Option>Python</Option>
            <Option>Java</Option>
            <Option>Javascript</Option>
            <Option>C++</Option>
            <Option>C</Option>
            <Option>C#</Option>
            <Option>Kotlin</Option>
          </Options>
        </CustomSelect>
      </Select>
    </CommonHashTagWrapper>
  );
};

const CommonHashTagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Select = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
`;

const CustomSelect = styled.div`
  position: relative;

  width: 29.6rem;

  &.open {
    display: block;
  }
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4.8rem;
  padding: 1.5rem 1.2rem 1.5rem 2rem;

  border-radius: 0.8rem;
  background-color: #292a2f;
  color: wheat;
  cursor: pointer;
`;

const Input = styled.input`
  color: wheat;
`;

const SelectedOptions = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 0;

  color: wheat;
`;

const Tag = styled.span`
  display: flex;
  align-items: center;

  padding: 0.4rem 0.6rem;
  margin-right: 1rem;

  border-radius: 0.4rem;
  background-color: #08ff3f;
  color: black;
`;

const RemoveTag = styled.span`
  margin: 0 0.5rem;
`;

const Arrow = styled.div`
  /* Only comments */
`;

const Options = styled.div`
  position: absolute;
  z-index: 1;

  width: 100%;
  margin-top: 0.6rem;

  border-radius: 0.8rem;
  border-top: none;
  background-color: #292a2f;

  text-align: center;

  max-height: 34.8rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Option = styled.div`
  padding: 1.2rem;

  color: wheat;
  color: #d8d9dd;
  cursor: pointer;
`;

export default CommonHashTag;
