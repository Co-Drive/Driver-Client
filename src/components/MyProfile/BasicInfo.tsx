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

const BasicInfoContainer = styled.article``;

const BasicTitle = styled.h2``;

const NameContainer = styled.div``;

const NameTitle = styled.article``;

const Name = styled.article``;

const GitHubContainer = styled.div``;

const GitHubTitle = styled.article``;

const Github = styled.p``;

export default BasicInfo;
