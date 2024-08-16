import { useState } from 'react';
import styled from 'styled-components';
import CommonInput from '../../common/CommonInput';
import EditButton from './EditButton';

const BasicInfo = () => {
  const [github, setGithub] = useState('');
  const [isEditingGithub, setIsEditingGithub] = useState(false);

  const handleEditClick = () => {
    setIsEditingGithub(!isEditingGithub);
  };

  return (
    <BasicInfoContainer>
      <BasicTitle>기본정보</BasicTitle>
      <NameContainer>
        <NameTitle>이름</NameTitle>
        <Name>서아름</Name>
      </NameContainer>
      <GitHubContainer>
        <GitHubTitle>깃허브 주소</GitHubTitle>
        {isEditingGithub ? (
          <CommonInput
            category="github"
            value={github}
            handleChangeInputs={(e) => setGithub(e.target.value)}
          />
        ) : (
          <Github>https://github.com/{github}</Github>
        )}
        <EditButton isEditing={isEditingGithub} onClick={handleEditClick} />
      </GitHubContainer>
    </BasicInfoContainer>
  );
};

const BasicInfoContainer = styled.article`
  width: 61.1rem;
  height: 26.8rem;
  padding: 2.4rem 2rem;

  background-color: ${({ theme }) => theme.colors.gray800};
`;

const BasicTitle = styled.h2`
  margin-bottom: 4rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_20};
`;

const NameContainer = styled.section`
  display: flex;
  align-items: center;

  padding: 1.45rem 0 2.85rem 1.6rem;
  margin-bottom: 3.2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
`;

const NameTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const Name = styled.p`
  margin-left: 8.6rem;

  color: ${({ theme }) => theme.colors.gray100};

  ${({ theme }) => theme.fonts.body_medium_16};
`;

const GitHubContainer = styled.section`
  display: flex;
  align-items: center;
  position: relative;

  padding: 0 0 1.4rem 1.6rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
`;

const GitHubTitle = styled.p`
  margin-right: 3rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_16};
`;

const Github = styled.p`
  overflow: hidden;

  width: 31rem;
  padding: 1.2rem 1.1rem;

  color: ${({ theme }) => theme.colors.gray100};

  word-break: break-all;

  text-overflow: ellipsis;

  ${({ theme }) => theme.fonts.body_medium_16};

  white-space: nowrap;
`;
export default BasicInfo;
