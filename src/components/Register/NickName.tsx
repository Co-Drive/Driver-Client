import styled from 'styled-components';

import { NickNameProps } from '../../types/Register/RegisterType';
import CommonInput from './../../common/CommonInput';

const NickName = ({
  nickname,
  changeNickname,
  handleChangeInputs,
  handleNicknameCheck,
}: NickNameProps) => {
  const { isExistNickname, isClickedCheckBtn } = changeNickname;

  const isButtonEnabled = nickname.length > 0 && nickname.length <= 10;

  return (
    <NickNameContainer>
      <TitleContainer>
        <Title>닉네임</Title>
        <Essential>*</Essential>
      </TitleContainer>
      <Info>최대 10자 이내로 입력해주세요</Info>
      <InputWrapper>
        <CommonInput
          category="nickname"
          value={nickname}
          isClickedCheckBtn={isClickedCheckBtn}
          isExitedNickname={isExistNickname}
          handleChangeInputs={handleChangeInputs}
        />
        <Button
          type="button"
          onClick={handleNicknameCheck}
          disabled={!isButtonEnabled}
          $isEnabled={isButtonEnabled}
        >
          검색
        </Button>
      </InputWrapper>
    </NickNameContainer>
  );
};

const NickNameContainer = styled.div`
  max-height: 6.6rem;

  margin-bottom: 9.7rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.6rem;
  margin-left: 0.2rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_20};
`;

const Essential = styled.span`
  margin-left: 0.6rem;

  ${({ theme }) => theme.fonts.title_medium_20};
  color: ${({ theme }) => theme.colors.codrive_purple};
`;

const Info = styled.span`
  display: block;

  margin-bottom: 1.6rem;
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;

const InputWrapper = styled.div`
  display: flex;
`;

const Button = styled.button<{ $isEnabled: boolean }>`
  width: 6.4rem;
  height: 4.8rem;
  margin-left: 1rem;

  border: none;
  border-radius: 0.6rem;
  background-color: ${({ theme, $isEnabled }) =>
    $isEnabled ? theme.colors.codrive_green : theme.colors.gray500};
  color: ${({ theme, $isEnabled }) =>
    $isEnabled ? theme.colors.gray900 : theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

export default NickName;
