import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CreateButton from '../components/GroupCreate/CreateButton';
import GroupSetting from '../components/GroupCreate/GroupSetting';
import ImageSection from '../components/GroupCreate/ImageSection';
import IntroSection from '../components/GroupCreate/IntroSection';
import LanguageSection from '../components/GroupCreate/LanguageSection';
import ProgressSection from '../components/GroupCreate/ProgressSection';
import TitleSection from '../components/GroupCreate/TitleSection';
import PageLayout from '../components/PageLayout/PageLayout';
import { postGroupInfo } from '../libs/apis/GroupCreate/postGroupInfo';

const GroupCreate = () => {
  const [inputs, setInputs] = useState({
    title: '',
    num: '',
    secretKey: '',
    intro: '',
    group: '',
  });

  const [isPublicGroup, setIspublicGroup] = useState<boolean | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>('');
  const [selectdImageFile, setSelctedImageFIle] = useState<File | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const navigate = useNavigate();
  const { title, num, secretKey, intro, group } = inputs;

  const maxCharLimits: { [key: string]: number } = {
    intro: 60,
    group: 1000,
  };

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
    setIspublicGroup(active);
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
      // 선택된 파일을 상태로 저장
      setSelctedImageFIle(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      // 파일 입력 필드 초기화
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

  const trimmedPassword = isPublicGroup ? '' : secretKey.trim();

  console.log(trimmedPassword);

  const handleGroupCreate = async () => {
    const postData = {
      title: title,
      password: trimmedPassword,
      capacity: num,
      tags: selectedTags,
      introduce: intro,
      information: group,
    };
    const requestBody = new FormData();
    const jsonChange = JSON.stringify(postData);

    requestBody.append('request', jsonChange);

    if (selectdImageFile) {
      requestBody.append('imageFile', selectdImageFile);
    }

    try {
      const data = await postGroupInfo(requestBody);
      const { uuid } = data.data;
      if (uuid) {
        navigate(`/group-complete/${uuid}`);
      } else {
        navigate('/group-complete', {
          state: {
            thumbnailUrl: previewImage,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
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
        <CreateButton
          isActive={isActive}
          handleGroupCreate={handleGroupCreate}
        />
      </Form>
    </PageLayout>
  );
};

export default GroupCreate;

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
