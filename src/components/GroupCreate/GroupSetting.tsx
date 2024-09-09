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
        {/* 공개 그룹 버튼 */}
        <GroupVisibilityBtn
          onClick={handleClickPublicGroup}
          isVisible={true}
          isActive={isPublicGroup === true}
        />

        {/* 비밀 그룹 버튼 - isPublicGroup === null 또는 true일 때만 보임 */}
        {isPublicGroup !== false && (
          <GroupVisibilityBtn
            onClick={handleClickPrivateGroup}
            isVisible={false}
            isActive={false} // 비밀 그룹 선택 시 활성화
          />
        )}

        {/* 비밀 그룹이 선택되었을 때만 CommonInput 표시하고, 비밀 그룹 버튼 숨김 */}
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
`;
