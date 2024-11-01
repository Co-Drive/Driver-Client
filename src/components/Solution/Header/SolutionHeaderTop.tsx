import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  BtnShare,
  IcArrowRightSmallGray,
  IcInformation,
  IcStarGray,
  IcStarGreen,
} from '../../../assets';
import ErrorModal from '../../../common/Modal/ErrorModal/ErrorModal';
import Modal from '../../../common/Modal/Modal';
import useGetUserProfile from '../../../libs/hooks/Follower/useGetUserProfile';
import useDeleteRecords from '../../../libs/hooks/Solution/useDeleteRecords';
import { SolutionHeaderTopProps } from '../../../types/Solution/solutionTypes';
import { handleCopyClipBoard } from '../../../utils/handleCopyClipBoard';
import SolveToolTip from '../../Solve/Header/SolveToolTip';

const SolutionHeaderTop = ({
  recordId,
  followerId,
  title,
  date,
  paintedStarArr,
}: SolutionHeaderTopProps) => {
  const navigate = useNavigate();
  const { mutation, deleteErr } = useDeleteRecords();
  const { data, isLoading } = useGetUserProfile(followerId) || {};
  const { profileImg, nickname } = (!isLoading && data?.data) || {};

  const [isCopied, setIsCopied] = useState(false);
  const isDeleteErr = deleteErr.length > 0;
  const [errModalOn, setErrModalOn] = useState(isDeleteErr);
  const [modalOn, setModalOn] = useState(false);

  const toggleModal = () => {
    setModalOn((prev) => !prev);
  };

  const handleClickShareBtn = () => {
    handleCopyClipBoard({ isUsedBaseUrl: false });
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const handleClickRemoveBtn = async () => {
    mutation(recordId);
  };

  const handleClickModifyBtn = () => {
    navigate('/solve', { state: { recordId: recordId } });
  };

  useEffect(() => {
    setErrModalOn(isDeleteErr);
  }, [deleteErr]);

  return (
    <SolutionHeaderTopContainer>
      {followerId && !isLoading ? (
        <FollowerContainer>
          <FollowerInfoContainer>
            <Img src={profileImg} />
            <Nickname>{`${nickname} 님`}</Nickname>
            <IcArrowRightSmallGray />
          </FollowerInfoContainer>

          <Date>{`작성일자 | ${date}`}</Date>
        </FollowerContainer>
      ) : (
        <Date>{`작성일자 | ${date}`}</Date>
      )}

      {isCopied && <Modal />}

      <TopContainer>
        <Title>{title}</Title>

        <BtnIcContainer onClick={handleClickShareBtn}>
          <BtnShare />
        </BtnIcContainer>
      </TopContainer>

      <BottomContainer>
        <LevelContainer>
          <LevelDetailContainer>
            <LvText>난이도</LvText>
            <LvStarContainer>
              {paintedStarArr.map((painted, idx) => {
                return (
                  <li key={idx}>
                    {painted ? <IcStarGreen /> : <IcStarGray />}
                  </li>
                );
              })}
            </LvStarContainer>
          </LevelDetailContainer>
          <button onClick={toggleModal}>
            <IcInformation />
          </button>
          {modalOn && (
            <SolveToolTip isOpen={modalOn} handleClose={toggleModal} />
          )}
        </LevelContainer>

        {!followerId && (
          <BtnContainer>
            <RemoveBtn type="button" onClick={handleClickRemoveBtn}>
              삭제하기
            </RemoveBtn>
            <ModifyBtn type="button" onClick={handleClickModifyBtn}>
              수정하기
            </ModifyBtn>
          </BtnContainer>
        )}
      </BottomContainer>

      {errModalOn && (
        <ErrorModal errMsg={deleteErr} onClose={() => setErrModalOn(false)} />
      )}
    </SolutionHeaderTopContainer>
  );
};

export default SolutionHeaderTop;

const SolutionHeaderTopContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  margin-bottom: 2.6rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;

const FollowerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: 1rem 0 -1rem;
`;

const FollowerInfoContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  margin-bottom: 3.4rem;
`;

const Img = styled.img`
  width: 2.6rem;
  height: 2.6rem;

  border-radius: 5rem;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const Date = styled.p`
  margin-bottom: 3.4rem;
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.body_medium_14};
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const Title = styled.p`
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_32};
`;

const BtnIcContainer = styled.div`
  display: flex;
  gap: 1.8rem;

  margin-right: 1.2rem;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 2.6rem 0 2.6rem 0.3rem;
`;

const LevelContainer = styled.div`
  display: flex;
  gap: 1.8rem;
  justify-content: center;
  align-items: center;

  margin-left: 0.6rem;
`;

export const LevelDetailContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

export const LvText = styled.p`
  padding-right: 1.2rem;

  border-right: 0.1rem solid ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.title_bold_16};
  color: ${({ theme }) => theme.colors.gray300};
`;

export const LvStarContainer = styled.ul`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const commonBtnStyle = styled.button`
  padding: 1rem 2rem;

  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const RemoveBtn = styled(commonBtnStyle)`
  background-color: ${({ theme }) => theme.colors.gray600};
`;

const ModifyBtn = styled(commonBtnStyle)`
  background-color: ${({ theme }) => theme.colors.gray500};
`;
