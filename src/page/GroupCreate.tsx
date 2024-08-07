import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CreateButton from '../components/GroupCreate/CreateButton';
import GroupSetting from '../components/GroupCreate/GroupSetting';
import ImageSection from '../components/GroupCreate/ImageSection';
import IntroSection from '../components/GroupCreate/IntroSection';
import LanguageSection from '../components/GroupCreate/LanguageSection';
import ProgressSection from '../components/GroupCreate/ProgressSection';
import TitleSection from '../components/GroupCreate/TitleSection';
import PageLayout from '../components/PageLayout/PageLayout';

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
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
      // 이미지 미리보기 설정 (선택 사항)
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

  return (
    <PageLayout category="group">
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
        <CreateButton isActive={isActive} />
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