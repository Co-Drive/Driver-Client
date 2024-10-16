import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import GroupSetting from '../components/GroupCreate/GroupSetting';
import ImageSection from '../components/GroupCreate/ImageSection';
import IntroSection from '../components/GroupCreate/IntroSection';
import LanguageSection from '../components/GroupCreate/LanguageSection';
import ProgressSection from '../components/GroupCreate/ProgressSection';
import TitleSection from '../components/GroupCreate/TitleSection';
import PageLayout from '../components/PageLayout/PageLayout';
import CommonButton from './../common/CommonButton';

import getRoomsId from '../libs/apis/GroupEdit/getRoomsId';
import patchRooms from './../libs/apis/GroupEdit/patchRooms';

const GroupEdit = () => {
  const { id } = useParams<{ id: string }>(); // URL에서 id 가져오기
  console.log(id);
  const [inputs, setInputs] = useState({
    title: '',
    num: '',
    secretKey: '',
    intro: '',
    group: '',
    previewImage: '',
  });

  const [isPublicGroup, setIsPublicGroup] = useState<boolean | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null); // 이미지 파일
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const { title, num, secretKey, intro, group } = inputs;
  console.log(inputs);

  const maxCharLimits: { [key: string]: number } = {
    intro: 60,
    group: 1000,
  };

  useEffect(() => {
    console.log(inputs);
  }, [inputs]); // inputs 상태가 업데이트될 때마다 로그 출력

  // 그룹 정보 불러오기
  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        const data = await getRoomsId(Number(id));
        console.log(data);
        if (data) {
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
    if (active) {
      setInputs((prevInputs) => ({
        ...prevInputs,
        secretKey: '',
      }));
    }
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
    !(Number(num) === 0 || Number(num) > 50) &&
    selectedTags.length > 0 &&
    intro !== '' &&
    group !== '';

  // 저장 버튼 클릭 시 그룹 정보 수정 API 호출
  const handleSaveBtnClick = async () => {
    try {
      if (isActive) {
        await patchRooms(
          title,
          secretKey,
          Number(num),
          selectedTags,
          intro,
          group,
          selectedImageFile || undefined // 이미지 파일이 있으면 전송
        );
        alert('그룹 정보가 성공적으로 수정되었습니다.');
      } else {
        alert('입력된 정보를 확인해 주세요.');
      }
    } catch (error) {
      console.error('그룹 정보를 수정하는 중 오류가 발생했습니다.', error);
    }
  };

  const handleCancelBtnClick = () => {
    // 입력 값들을 초기 상태로 되돌림
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
          titleValue={inputs.title}
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
