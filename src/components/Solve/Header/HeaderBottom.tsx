import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  IcArrowBottomGray,
  IcArrowTopGray,
  IcLinkGray,
  IcLinkWhite,
} from '../../../assets';
import { TAG_PLATFORM_LISTS } from '../../../constants/Solve/SolveConts';
import {
  ClickedListProps,
  HeaderBottomProps,
  UpdateQuestionInfoProps,
} from '../../../types/Solve/solveTypes';

const HeaderBottom = ({
  isOpenOptions,
  questionInfo,
  handleClickQuestionInfo,
}: HeaderBottomProps) => {
  const { tags, platform, problemUrl } = questionInfo;
  const [isOptionOpen, setIsOptionOpen] = useState({
    tags: false,
    platform: false,
  });

  const handleToggleOption = (category: string) => {
    const isTagCategory = category === 'tags';
    const toggleIsOptionOpen = isTagCategory
      ? !isOptionOpen.tags
      : !isOptionOpen.platform;

    setIsOptionOpen({
      ...isOptionOpen,
      [category]: toggleIsOptionOpen,
    });
  };

  // 선택한 문제 정보를 업데이트하는 함수
  const updateQuestionInfo = ({ category, value }: UpdateQuestionInfoProps) => {
    handleClickQuestionInfo({
      category: category,
      clickedValue: value,
    });
  };

  // 선택된 옵션을 문제 정보로 저장하는 함수
  const handleClickOption = ({ category, selectedValue }: ClickedListProps) => {
    const isTagCategory = category === 'tags';

    if (isTagCategory) {
      let newTags;
      //  선택한 태그를 한 번 더 선택한 경우
      if (tags.includes(selectedValue)) {
        // 태그 배열에서 제외시킴
        newTags = tags.filter((tag) => tag !== selectedValue);
        updateQuestionInfo({ category: category, value: newTags });
      } else {
        if (tags.length < 2) {
          // 선택한 태그 저장
          newTags = [...tags, selectedValue];
          updateQuestionInfo({ category: category, value: newTags });

          if (tags.length === 1) handleToggleOption(category);
        } else if (tags.length === 2) {
          alert('최대 선택 개수는 2개 입니다.');
        }
      }
    } else {
      updateQuestionInfo({ category: category, value: selectedValue });
      handleToggleOption(category);
    }
  };

  useEffect(() => {
    if (isOpenOptions === false) {
      setIsOptionOpen({ tags: false, platform: false });
    }
  }, [isOpenOptions]);

  return (
    <HeaderBottomContainer>
      {TAG_PLATFORM_LISTS.map((list) => {
        const { category, placeholder, options } = list;
        const isTagCategory = category === 'tags';
        const selectedCategory = isTagCategory ? 'tags' : 'platform';
        const isOptionHidden =
          (isTagCategory && !isOptionOpen.tags) ||
          (!isTagCategory && !isOptionOpen.platform);
        const platformValue = platform ? platform : '';

        return (
          <SelectContainer key={category} $isTagCategory={isTagCategory}>
            <InputContainer
              $isTagCategory={isTagCategory}
              onClick={() => handleToggleOption(selectedCategory)}
            >
              <Input
                readOnly={true}
                placeholder={placeholder}
                value={isTagCategory ? tags.join(', ') : platformValue}
                $isTagCategory={isTagCategory}
              />
              {isOptionHidden ? <IcArrowBottomGray /> : <IcArrowTopGray />}
            </InputContainer>

            <OptionContainer
              $hidden={isOptionHidden}
              $isTagCategory={isTagCategory}
            >
              {options.map((option: string) => {
                return (
                  <Option
                    key={option}
                    onClick={() => {
                      handleClickOption({
                        category: selectedCategory,
                        selectedValue: option,
                      });
                    }}
                    $isClickedList={
                      isTagCategory
                        ? tags.includes(option)
                        : platform === option
                    }
                  >
                    {option}
                  </Option>
                );
              })}
            </OptionContainer>
          </SelectContainer>
        );
      })}

      <LinkInputContainer>
        {problemUrl.length ? <IcLinkWhite /> : <IcLinkGray />}
        <LinkInput
          placeholder="링크를 첨부해주세요"
          value={problemUrl}
          onChange={(e) =>
            handleClickQuestionInfo({ category: 'problemUrl', e })
          }
        />
      </LinkInputContainer>
    </HeaderBottomContainer>
  );
};

export default HeaderBottom;

const HeaderBottomContainer = styled.section`
  display: flex;
  gap: 1.9rem;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const SelectContainer = styled.article<{ $isTagCategory: boolean }>`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  flex-direction: column;
  flex-grow: ${({ $isTagCategory }) => ($isTagCategory ? 1.87 : 1)};
  position: relative;
`;

const InputContainer = styled.div<{ $isTagCategory: boolean }>`
  display: flex;
  gap: ${({ $isTagCategory }) => ($isTagCategory ? `1.2rem` : `0.8rem`)};
  justify-content: space-between;
  align-items: center;

  padding: 1.2rem 1.2rem 1.2rem 2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const Input = styled.input<{ $isTagCategory: boolean }>`
  width: ${({ $isTagCategory }) => ($isTagCategory ? `31.7rem` : `14.2rem`)};

  outline: none;

  border: none;
  background-color: transparent;
  ${({ theme }) => theme.fonts.body_medium_16};
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

const OptionContainer = styled.ul<{
  $hidden: boolean;
  $isTagCategory: boolean;
}>`
  display: ${({ $hidden }) => ($hidden ? 'none' : 'block')};
  position: absolute;
  top: 5.8rem;
  z-index: 1;

  width: 100%;
  padding: 0.8rem 0.8rem 0.2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray800};

  text-align: center;
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const Option = styled.li<{ $isClickedList: boolean }>`
  width: 100%;
  padding: 1.2rem 0 0.7rem;
  margin-bottom: 0.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme, $isClickedList }) =>
    $isClickedList ? theme.colors.gray700 : theme.colors.gray800};
  ${({ theme }) => theme.fonts.body_medium_16};
  color: ${({ theme }) => theme.colors.gray100};

  &:hover {
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.gray700};
  }
`;

const LinkInputContainer = styled.article`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;

  width: 29.7rem;
  padding: 1.2rem 1.6rem 1.2rem 1.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const LinkInput = styled.input`
  width: 100%;

  outline: none;

  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_medium_16};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;
