import styled from 'styled-components';
import { IcSecretGray, IcUnlockGray } from '../assets';
import PageLayout from '../components/PageLayout/PageLayout';
import { PLACEHOLDER } from '../constants/CommonTextarea/textareaConst';

const GroupCreate = () => {
  return (
    <PageLayout category="group">
      <Form>
        <Header>그룹 생성하기</Header>
        <Borderline />
        <Section>
          <GroupSetting>
            그룹 설정
            <Essential>*</Essential>
          </GroupSetting>
          <ButtonContainer>
            <GroupButton>
              <IcUnlockGray />
              공개그룹
            </GroupButton>
            <GroupButton>
              <IcSecretGray />
              비공개그룹
            </GroupButton>
          </ButtonContainer>
        </Section>

        <section>
          <label>
            대표 이미지 <Essential>*</Essential>
          </label>
          <div>
            <img alt="대표 이미지" />
            <input type="file" accept="image/*" />
            <p>612px * 368px 사이즈를 권장드려요</p>
          </div>
        </section>

        <section>
          <div>
            <label>
              그룹 제목 <Essential>*</Essential>
            </label>
          </div>
          <input type="text" placeholder={PLACEHOLDER[2]} />
        </section>

        <section>
          <label>
            모집 인원 <Essential>*</Essential>
          </label>
          <p>50명까지 가능해요</p>
          <input type="number" placeholder={PLACEHOLDER[3]} />
        </section>

        <section>
          <label>
            사용 언어 <Essential>*</Essential>
          </label>
          <select>
            <option>복수선택 가능</option>
          </select>
        </section>

        <section>
          <label>
            한 줄 소개 <Essential>*</Essential>
          </label>
          <textarea maxLength={60} placeholder={PLACEHOLDER[0]} />
        </section>
        <section>
          <label>
            진행 방식 <Essential>*</Essential>
          </label>
          <textarea maxLength={1000} placeholder={PLACEHOLDER[4]} />
        </section>
        <button>그룹 생성하기</button>
      </Form>
    </PageLayout>
  );
};

export default GroupCreate;

const Form = styled.form`
  background-color: pink;
`;

const Header = styled.header`
  ${({ theme }) => theme.fonts.title_bold_24};
  margin: 6rem 0 2.1rem;

  color: ${({ theme }) => theme.colors.white};
`;

const Borderline = styled.div`
  border-bottom: 0.01rem solid ${({ theme }) => theme.colors.gray300};
`;

const Section = styled.section`
  /* background-color: red; */
`;

const GroupSetting = styled.h2`
  display: flex;
  align-items: center;

  margin-top: 4rem;

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

const GroupButton = styled.button`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  padding: 1.5rem 1.6rem 1.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray500};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_medium_16};
`;
