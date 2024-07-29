import styled from 'styled-components';

const ParticipatingGroup = () => {
  return (
    <ParticipatingCardContainer>
      <Title>참여 그룹</Title>

      <CardContainer>
        <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQdMSF0UfUeev25_EDlcSS0jCfciYTLT-qw&s" />
        <Contents>
          <Name>이제는 더이상 물러날 곳이 없는 스터디</Name>
          <TagContainer>
            <Tag>#swift</Tag>
            <Tag>#java</Tag>
            <Tag>#javascript</Tag>
          </TagContainer>
          <Introduce>
            안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다안녕하세요
            스터디입니다 설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다
            설명칸은 두줄까지 가능합니다안녕하세요 스터디입니다 설명칸은
            두줄까지 가능합니다
          </Introduce>
        </Contents>
      </CardContainer>
    </ParticipatingCardContainer>
  );
};

export default ParticipatingGroup;

const ParticipatingCardContainer = styled.article`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.p`
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const CardContainer = styled.article`
  display: flex;
  gap: 2rem;
  flex-direction: column;

  width: 29.6rem;
  height: 27.1rem;
`;

const Img = styled.img`
  width: 100%;
  height: 17.8rem;

  border-radius: 1.6rem;
  background-color: white;
  object-fit: cover;
`;

const Contents = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  flex-direction: column;

  width: calc(100% - 2rem);
  margin: 0 1rem;
`;

const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const TagContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Tag = styled.p`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
`;

const Introduce = styled.p`
  overflow: hidden;

  width: 100%;
  height: 2.8rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_ligth_12};

  white-space: pre-wrap;
  word-break: break-all;
`;
