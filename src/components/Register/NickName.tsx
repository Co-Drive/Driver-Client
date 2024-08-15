import styled from 'styled-components';

import { NickNameProps } from '../../types/Register/RegisterType';
import CommonInput from './../../common/CommonInput';

const NickName = ({
  nickname,

  handleChangeInputs,
  handleNicknameCheck,
}: NickNameProps) => {
  return (
    <NickNameContainer>
      <Title>
        닉네임 <span>*</span>
      </Title>
      <Info>최대 10자 이내로 입력해주세요</Info>
      <InputWrapper>
        <CommonInput
          category="nickname"
          value={nickname}
          handleChangeInputs={handleChangeInputs}
        />
        <Button type="button" onClick={handleNicknameCheck}>
          검색
        </Button>
      </InputWrapper>
    </NickNameContainer>
  );
};

const NickNameContainer = styled.div`
  margin-bottom: 5rem;
`;

const Title = styled.h2`
  display: flex;

  margin-bottom: 0.6rem;
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_20};

  span {
    margin-left: 0.6rem;

    color: ${({ theme }) => theme.colors.codrive_purple};
  }
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
  align-items: center;
`;

const Button = styled.button`
  padding: 1.5rem 1.8rem 1.4rem;
  margin-left: 1rem;

  border: none;
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
  color: ${({ theme }) => theme.colors.gray900};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

export default NickName;
