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
  return (
    <PageLayout category="group">
      <Form>
        <Header>그룹 생성하기</Header>
        <Borderline />
        <GroupSetting />
        <ImageSection />
        <TitleSection />
        <LanguageSection />
        <IntroSection />
        <ProgressSection />
        <CreateButton />
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
