import { useNavigate, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { IcArrowRightSmallGray, IcRevise } from '../../assets';
import { ALL_TAG } from '../../constants/utils/allTag';
import useGetDetail from '../../libs/hooks/GroupDetail/useGetDetail';
import { GroupInfoProps } from '../../types/GroupMember/memberType';

const GroupInfo = ({
  isAdmin,
  adminMode,
  handleClickAdminToggle,
}: GroupInfoProps) => {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) return;
  const groupId = parseInt(id);
  const { data, isLoading } = useGetDetail(groupId);
  const { imageSrc, title, tags, owner, password } = !isLoading && data?.data;
  const { userId, nickname, profileImg } = !isLoading && owner;
  const renderTags = tags && (tags.length > 5 ? ALL_TAG : tags);

  const handleClickMoreInfoBtn = () => {
    navigate(`/group/${id}`, { state: { disabledApply: true } });
  };

  const handleClickHost = () => {
    navigate(`/follower/${userId}`);
  };

  return (
    <>
      {!isLoading && (
        <GroupInfoContainer>
          <ImgContainer>
            <GroupImg src={imageSrc} />
            {password && (
              <PassWordContainer>
                <PasswordTxt>비밀번호</PasswordTxt>
                <Password>{password}</Password>
              </PassWordContainer>
            )}
          </ImgContainer>

          <TotalGroupInfo $isAdmin={isAdmin}>
            {isAdmin && (
              <AdminModeContaienr>
                <AdminTextContainer>
                  <AdminText>관리자 모드</AdminText>
                  <AdminMode $on={adminMode}>
                    {adminMode ? 'ON' : 'OFF'}
                  </AdminMode>
                </AdminTextContainer>

                <AdminControlContainer>
                  <AdminToggle
                    type="button"
                    $on={adminMode}
                    onClick={handleClickAdminToggle}
                  >
                    <ToggleCircle $on={adminMode} />
                  </AdminToggle>
                  <IcContainer $on={adminMode} onClick={handleClickAdminToggle}>
                    <IcRevise />
                  </IcContainer>
                </AdminControlContainer>
              </AdminModeContaienr>
            )}

            <Group $isAdmin={isAdmin}>
              <Tags>
                {renderTags.map((tag: string) => {
                  return <Tag key={tag}>#{tag}</Tag>;
                })}
              </Tags>
              <Title>{title}</Title>
              <MoreInfoBtn type="button" onClick={handleClickMoreInfoBtn}>
                <MoreInfoText>그룹 정보 보기</MoreInfoText>
                <IcArrowRightSmallGray />
              </MoreInfoBtn>
            </Group>

            {!isAdmin && (
              <Host typeof="button" onClick={handleClickHost}>
                <ProfileImg src={profileImg} />
                <NicknameContainer>
                  <Nickname>{nickname}</Nickname>
                  <Nickname>님</Nickname>
                </NicknameContainer>
                <IcArrowRightSmallGray />
              </Host>
            )}
          </TotalGroupInfo>
        </GroupInfoContainer>
      )}
    </>
  );
};

export default GroupInfo;

const GroupInfoContainer = styled.article`
  display: flex;
  gap: 3.6rem;

  width: 100%;
  padding-bottom: 1.8rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray800};
`;

const ImgContainer = styled.div`
  position: relative;

  width: 36.4rem;
  height: 21.8rem;
`;

const GroupImg = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 1.2rem;
  object-fit: cover;
`;

const PassWordContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1.2rem;
  bottom: 1.2rem;

  padding: 0.8rem 1.2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray600};
`;

const PasswordTxt = styled.p`
  padding-right: 0.4rem;

  border-right: 0.1rem solid ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.title_regular_14};
`;

const Password = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_regular_14};
`;

const TotalGroupInfo = styled.div<{ $isAdmin: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin: ${({ $isAdmin }) => ($isAdmin ? ` 0 0 1.8rem` : ` 1.2rem 0 1.6rem`)};
`;

const AdminModeContaienr = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 4rem;
`;

const AdminTextContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const AdminText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_ligth_10};
`;

const AdminMode = styled.p<{ $on?: boolean }>`
  color: ${({ theme, $on }) =>
    $on ? theme.colors.codrive_green : theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_ligth_10};
`;

const AdminControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const IcContainer = styled.div<{ $on?: boolean }>`
  padding: 0.6rem;

  ${({ $on }) =>
    $on &&
    css`
      &:hover {
        border-radius: 5rem;
        background-color: ${({ theme }) => theme.colors.gray500};
      }
    `};
`;

const AdminToggle = styled.button<{ $on?: boolean }>`
  position: relative;

  width: 6.2rem;
  height: 2.8rem;

  border-radius: 9.9rem;
  background-color: ${({ $on, theme }) =>
    $on ? theme.colors.codrive_green : theme.colors.gray700};
  cursor: pointer;

  transition: 0.5s;
`;

const ToggleCircle = styled.span<{ $on?: boolean }>`
  position: absolute;
  top: 0.3rem;

  width: 2.2rem;
  height: 2.2rem;

  border-radius: 50%;

  ${({ $on, theme }) =>
    $on
      ? css`
          right: 0.3rem;

          background-color: ${theme.colors.white};
          box-shadow: -0.1rem 0 0.3rem rgb(11 12 15 / 35%);
        `
      : css`
          left: 0.3rem;

          background-color: ${theme.colors.gray300};
          box-shadow: 0.2rem 0 0.4rem rgb(11 12 15 / 35%);
        `};

  transition: 0.5s;
`;

const Group = styled.div<{ $isAdmin: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${({ $isAdmin, theme }) =>
    !$isAdmin &&
    css`
      padding-bottom: 2.8rem;

      border-bottom: 0.1rem solid ${theme.colors.gray700};
    `};
`;

const Tags = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  margin-bottom: 1.4rem;
`;

const Tag = styled.p`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.body_eng_medium_16};
`;

const Title = styled.p`
  margin-bottom: 2.3rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_32};
`;

const MoreInfoBtn = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const MoreInfoText = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.title_semiBold_14};
`;

const Host = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;

  margin-top: 2.4rem;
`;

const ProfileImg = styled.img`
  width: 2.6rem;
  height: 2.6rem;

  border-radius: 5rem;

  object-fit: cover;
`;

const NicknameContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;
