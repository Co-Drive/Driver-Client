import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import GroupSetting from '../components/GroupCreate/GroupSetting';
import ImageSection from '../components/GroupCreate/ImageSection';
import IntroSection from '../components/GroupCreate/IntroSection';
import LanguageSection from '../components/GroupCreate/LanguageSection';
import ProgressSection from '../components/GroupCreate/ProgressSection';
import TitleSection from '../components/GroupCreate/TitleSection';
import PageLayout from '../components/PageLayout/PageLayout';
import CommonButton from './../common/CommonButton';

import usePatchRooms from '../libs/hooks/GroupEdit/usePatchRooms';
import useGetDetail from './../libs/hooks/GroupDetail/useGetDetail';
import LoadingPage from './LoadingPage';

const GroupEdit = () => {
  const { id } = useParams();
  if (!id) return;
  const { data, isLoading: isGetDetailLoading } = useGetDetail(parseInt(id));

  const {
    title: originTitle,
    imageSrc,
    capacity,
    tags,
    introduce,
    information,
    password,
    isPublicRoom,
  } = !isGetDetailLoading && data?.data;

  const initialData = {
    title: '',
    num: 0,
    secretKey: '',
    intro: '',
    group: '',
    previewImage: '',
    selectedTags: [''],
  };

  const [inputs, setInputs] = useState(initialData);
  const [isPublicGroup, setIsPublicGroup] = useState<boolean>(isPublicRoom);
  const [previewImage, setPreviewImage] = useState<string | null>(imageSrc);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>(tags);

  const navigate = useNavigate();
  const { patchMutation, isPending } = usePatchRooms();
  const { title, num, secretKey, intro, group } = inputs;

  const isLoading = isPending || isGetDetailLoading;

  const maxCharLimits: { [key: string]: number } = {
    intro: 60,
    group: 1000,
  };

  // 입력값 처리 함수
  const handleChangeInputs = <T extends HTMLInputElement | HTMLTextAreaElement>(
    e: React.ChangeEvent<T>
  ) => {
    const { name, value } = e.target;
    const maxLength = maxCharLimits[name];
    const limitedValue = maxLength ? value.slice(0, maxLength) : value;
    setInputs({
      ...inputs,
      [name]: limitedValue,
    });
  };

  const handleActiveChange = (active: boolean) => {
    setIsPublicGroup(active);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setSelectedImageFile(file); // 선택된 파일 저장
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      e.target.value = '';
    }
  };

  const isActive =
    (isPublicGroup || (secretKey.length > 0 && secretKey.length <= 20)) &&
    title.length > 0 &&
    title.length <= 20 &&
    !(num === 0 || num > 50) &&
    selectedTags !== undefined &&
    selectedTags.length > 0 &&
    intro !== '' &&
    group !== '';

  // 저장 버튼 클릭 시 그룹 정보 수정 API 호출
  const handleSaveBtnClick = () => {
    if (!isActive) return;

    const trimmedPassword = isPublicGroup ? '' : secretKey.trim();

    const postData = {
      title,
      password: trimmedPassword,
      capacity: num,
      tags: selectedTags,
      introduce: intro,
      information: group,
    };

    const requestBody = new FormData();
    const jsonChange = JSON.stringify(postData);

    requestBody.append('request', jsonChange);

    if (selectedImageFile) {
      requestBody.append('imageFile', selectedImageFile);
    }

    patchMutation({ roomId: Number(id), requestBody });
  };

  const handleCancelBtnClick = () => {
    // 초기 데이터로 되돌립니다.
    setInputs(initialData);
    setSelectedTags(tags || []);
    setIsPublicGroup(!password);
    setSelectedImageFile(null);
    navigate(`/group/${id}/admin?page=1&sort=NEW`);
  };

  useEffect(() => {
    if (!isGetDetailLoading) {
      setInputs({
        title: originTitle,
        num: capacity,
        secretKey: password,
        intro: introduce,
        group: information,
        previewImage: imageSrc,
        selectedTags: tags,
      });
      setIsPublicGroup(isPublicRoom);
      setPreviewImage(imageSrc);
      setSelectedTags(tags);
    }
  }, [isGetDetailLoading]);

  return (
    <PageLayout category="그룹">
      {isLoading ? (
        <LoadingPage isPageLoading={true} />
      ) : (
        <Form>
          <Header>그룹 생성하기</Header>
          <Borderline />
          <GroupSetting
            isPublicGroup={isPublicGroup}
            handleActiveChange={handleActiveChange}
            handlePasswordChange={handleChangeInputs}
            secretKey={secretKey}
          />
          <ImageSection
            previewImage={previewImage}
            handleImageChange={handleImageChange}
          />
          <TitleSection
            titleValue={title}
            recruitedValue={num.toString()}
            handleMemberCountChange={handleChangeInputs}
          />
          {selectedTags && (
            <LanguageSection
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
            />
          )}
          <IntroSection
            introValue={intro}
            handleChangeTextarea={handleChangeInputs}
          />
          <ProgressSection
            progressValue={group}
            handleChangeTextarea={handleChangeInputs}
          />
          <ProfileButton>
            <CancelButton type="button" onClick={handleCancelBtnClick}>
              취소하기
            </CancelButton>
            <CommonButton
              isActive={isActive}
              category="Profile_save"
              onClick={handleSaveBtnClick}
            />
          </ProfileButton>
        </Form>
      )}
    </PageLayout>
  );
};

export default GroupEdit;

const Form = styled.form`
  padding-bottom: 33.2rem;
`;

const Header = styled.header`
  ${({ theme }) => theme.fonts.title_bold_24};
  margin: 6rem 0 2.1rem;

  color: ${({ theme }) => theme.colors.white};
`;

const Borderline = styled.div`
  border-bottom: 0.01rem solid ${({ theme }) => theme.colors.gray300};
`;

const ProfileButton = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: end;

  margin-top: 3.8rem;
`;

const CancelButton = styled.button`
  padding: 1rem 2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;
