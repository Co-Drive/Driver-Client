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
  const handleClickButton = () => {
    handleActiveChange(!isPublicGroup);
  };

  return (
    <Section>
      <Header>
        그룹 설정 <Essential>*</Essential>
      </Header>
      <ButtonContainer>
        <GroupVisibilityBtn
          onClick={handleClickButton}
          isVisible={true}
          isActive={isPublicGroup}
        />
        {isPublicGroup ? (
          <GroupVisibilityBtn
            onClick={handleClickButton}
            isVisible={false}
            isActive={!isPublicGroup}
          />
        ) : (
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

  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const Essential = styled.span`
  color: ${({ theme }) => theme.colors.codrive_purple};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.8rem;

  margin-top: 2rem;
`;
