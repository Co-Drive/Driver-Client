import { useState } from 'react';
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

import patchRooms from './../libs/apis/GroupEdit/patchRooms';
import useGetDetail from './../libs/hooks/GroupDetail/useGetDetail';

const GroupEdit = () => {
  const { id } = useParams();
  if (!id) return;
  const { data, isLoading } = useGetDetail(parseInt(id));
  console.log('API 데이터:', data);
  const {
    title: groupTitle,
    imageSrc,
    capacity,
    tags,
    introduce,
    information,
    password,
  } = !isLoading && data?.data;
  const [inputs, setInputs] = useState({
    title: groupTitle || '',
    num: capacity ? capacity.toString() : '0',
    secretKey: password || '',
    intro: introduce || '',
    group: information || '',
    previewImage: imageSrc || null,
  });
  console.log(inputs);

  const [isPublicGroup, setIsPublicGroup] = useState<boolean>(!password);
  const [previewImage, setPreviewImage] = useState<string | null>(
    imageSrc || ''
  );
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null); // 이미지 파일
  const [selectedTags, setSelectedTags] = useState<string[]>(tags || []);
  const [savedSecretKey, setSavedSecretKey] = useState<string>(password || ''); // 임시로 비밀번호를 저장하는 변수
  const navigate = useNavigate();
  const { title: roomTitleInput, num, secretKey, intro, group } = inputs;

  const maxCharLimits: { [key: string]: number } = {
    intro: 60,
    group: 1000,
  };

  // 그룹 정보 불러오기
  /* useEffect(() => {
    const fetchGroupData = async () => {
      try {
        const data = await getRoomsId(Number(id));

        if (data) {
          setRoomId(data.roomId || Number(id)); // roomId를 설정해줍니다.
          setInputs({
            title: data.title || '',
            num: data.capacity ? data.capacity.toString() : '0',
            secretKey: data.password || '',
            intro: data.introduce || '',
            group: data.information || '',
            previewImage: data.imageSrc || null,
          });
          setSelectedTags(data.tags || []);
          setIsPublicGroup(!data.password);
          if (data.imageSrc) {
            setPreviewImage(data.imageSrc);
          }
        }
      } catch (error) {
        console.error('그룹 정보를 불러오는 중 오류가 발생했습니다.', error);
      }
    };
    fetchGroupData();
  }, [id]); // id가 바뀔 때마다 fetchGroupData 실행
 */
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
    if (active) {
      // 공개 그룹 선택 시 기존 비밀번호를 임시 저장하고 비밀번호 필드 초기화
      setSavedSecretKey(inputs.secretKey);
      setInputs((prevInputs) => ({
        ...prevInputs,
        secretKey: '',
      }));
    } else {
      // 비밀 그룹 선택 시 저장된 비밀번호 복원
      setInputs((prevInputs) => ({
        ...prevInputs,
        secretKey: savedSecretKey,
      }));
    }
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
    roomTitleInput.length > 0 &&
    roomTitleInput.length <= 20 &&
    !(Number(num) === 0 || Number(num) > 50) &&
    selectedTags.length > 0 &&
    intro !== '' &&
    group !== '';

  // 저장 버튼 클릭 시 그룹 정보 수정 API 호출
  const handleSaveBtnClick = async () => {
    if (!isActive) return;

    const postData = {
      title: roomTitleInput,
      password: secretKey,
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

    try {
      const data = await patchRooms(Number(id), requestBody);

      navigate(`/group/${id}/admin`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelBtnClick = () => {
    navigate(`/group/${id}/admin`);
  };

  return (
    <PageLayout category="그룹">
      <Form>
        <Header>그룹 생성하기</Header>
        <Borderline />
        <GroupSetting
          isPublicGroup={isPublicGroup}
          handleActiveChange={handleActiveChange}
          handlePasswordChange={handleChangeInputs}
          secretKey={inputs.secretKey}
        />
        <ImageSection
          previewImage={previewImage}
          handleImageChange={handleImageChange}
        />
        <TitleSection
          titleValue={roomTitleInput}
          recruitedValue={inputs.num}
          handleMemberCountChange={handleChangeInputs}
        />
        <LanguageSection
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <IntroSection
          introValue={inputs.intro}
          handleChangeTextarea={handleChangeInputs}
        />
        <ProgressSection
          progressValue={inputs.group}
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
    </PageLayout>
  );
};

export default GroupEdit;

const Form = styled.form`
  margin-bottom: 25.1rem;
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
