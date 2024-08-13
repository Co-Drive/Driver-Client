import { useEffect, useState } from 'react';
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
import { api } from '../libs/api';

const GroupCreate = () => {
  // 상태 객체 선언
  const [inputs, setInputs] = useState({
    title: '',
    num: '',
    secretKey: '',
    intro: '',
    group: '',
  });

  const [isPublicGroup, setIspublicGroup] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>('');
  const [selectdImageFile, setSelctedImageFIle] = useState<File | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleChangeInputs = <T extends HTMLInputElement | HTMLTextAreaElement>(
    e: React.ChangeEvent<T>
  ) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
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

  // 모든 데이터가 채워지면 그룹버튼 생성 활성화
  useEffect(() => {
    const allFieldsFilled = (
      Object.keys(inputs) as Array<keyof typeof inputs>
    ).every((key) => key === 'secretKey' || inputs[key] !== '');
    setIsActive(allFieldsFilled || (isPublicGroup && allFieldsFilled));
  }, [inputs, isPublicGroup]);

  const handleGroupCreate = async () => {
    const postData = {
      title: inputs.title,
      password: inputs.secretKey,
      capacity: inputs.num,
      tags: selectedTags,
      introduce: inputs.intro,
      information: inputs.group,
    };
    const requestBody = new FormData();
    const jsonChange = JSON.stringify(postData);

    requestBody.append('request', jsonChange);

    if (selectdImageFile) {
      requestBody.append('imageFile', selectdImageFile);
    }

    try {
      const { data } = await api.post('/rooms', requestBody, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const uuid = data.data.uuid;
      console.log(data);

      if (uuid) {
        navigate(`/group-complete/${uuid}`, {
          state: {
            groupPassword: inputs.secretKey,
            thumbnailUrl: previewImage,
          },
        });
      } else {
        navigate('/group-complete', {
          state: {
            thumbnailUrl: previewImage,
          },
        });
      }

      // if (data) {
      //   navigate('/group-complete', {
      //     state: {
      //       groupPassword: inputs.secretKey,
      //       thumbnailUrl: previewImage,
      //     },
      //   });
      // }
    } catch (error) {
      console.log(error);
    }
  };

  // navigate('/group-complete', {
  //   state: {
  //     groupPassword: inputs.secretKey,
  //     thumbnailUrl: previewImage as string,
  //   },
  // });

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
