import styled from 'styled-components';
import CommonInput from '../../common/CommonInput';
import GroupVisibilityBtn from '../../common/GroupVisibilityBtn';
import { GroupSettingProps } from '../../types/GroupCreate/GroupCreateType';

const GroupSetting = ({
  handleActiveChange,
  isPublicGroup,
  handlePasswordChange,
  secretKey,
}: GroupSettingProps) => {
  const handleClickPublicGroup = () => {
    handleActiveChange(true);
  };

  const handleClickPrivateGroup = () => {
    handleActiveChange(false);
  };

  return (
    <Section>
      <HeaderContainer>
        <Header>
          그룹 설정 <Essential>*</Essential>
        </Header>
      </HeaderContainer>
      <ButtonContainer>
        <GroupVisibilityBtn
          onClick={handleClickPublicGroup}
          isVisible={true}
          isActive={isPublicGroup === true}
        />
        {isPublicGroup !== false && (
          <GroupVisibilityBtn
            onClick={handleClickPrivateGroup}
            isVisible={false}
            isActive={false}
          />
        )}
        {isPublicGroup === false && (
          <CommonInput
            category="secretKey"
            value={secretKey}
            handleChangeInputs={handlePasswordChange}
          />
        )}
      </ButtonContainer>
    </Section>
  );
};

export default GroupSetting;

const Section = styled.section`
  margin-top: 4rem;
`;

const Header = styled.h2`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  margin-left: 0.2rem;

  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const HeaderContainer = styled.div`
  display: flex;
`;

const Essential = styled.span`
  color: ${({ theme }) => theme.colors.codrive_purple};
  ${({ theme }) => theme.fonts.title_medium_20};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.8rem;

  margin-top: 2rem;
  min-height: 7.4rem;
`;
