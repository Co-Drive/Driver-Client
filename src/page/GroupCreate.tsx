import styled from 'styled-components';
import PageLayout from '../components/PageLayout/PageLayout';
import { PLACEHOLDER } from '../constants/CommonTextarea/textareaConst';

const GroupCreate = () => {
  return (
    <PageLayout category="group">
      <MainContainer>
        <form>
          <header>그룹 생성하기</header>
          <section>
            <h2>
              그룹 설정
              <span>*</span>
            </h2>
            <div>
              <button>공개그룹</button>
              <button>비공개그룹</button>
            </div>
          </section>
          <section>
            <label>
              대표 이미지 <span>*</span>
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
                그룹 제목 <span>*</span>
              </label>
            </div>
            <input type="text" placeholder={PLACEHOLDER[2]} />
          </section>
          <section>
            <label>
              모집 인원 <span>*</span>
            </label>
            <p>50명까지 가능해요</p>
            <input type="number" placeholder={PLACEHOLDER[3]} />
          </section>

          <section>
            <label>
              사용 언어 <span>*</span>
            </label>
            <select>
              <option>복수선택 가능</option>
            </select>
          </section>

          <section>
            <label>
              한 줄 소개 <span>*</span>
            </label>
            <textarea placeholder={PLACEHOLDER[0]} />
          </section>
          <section>
            <label>
              진행 방식 <span>*</span>
            </label>
            <textarea placeholder={PLACEHOLDER[4]} />
          </section>
        </form>
      </MainContainer>
    </PageLayout>
  );
};

export default GroupCreate;

const MainContainer = styled.main`
  background-color: pink;
`;
