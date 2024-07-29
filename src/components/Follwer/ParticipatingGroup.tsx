import styled from 'styled-components';
import GroupCard from './GroupCard';

interface ParticipatingGroupProps {
  group: Array<{
    id: number;
    imgSrc: string;
    title: string;
    tags: Array<string>;
    introduce: string;
  }>;
}

const ParticipatingGroup = ({ group }: ParticipatingGroupProps) => {
  return (
    <ParticipatingCardContainer>
      <Title>참여 그룹</Title>

      <GroupContainer>
        {group.map((card) => {
          const { id, imgSrc, title, tags, introduce } = card;
          if (id % 3 === 0) {
            return (
              <CardsContainer key={id}>
                <CardContainer>
                  <GroupCard card={{ imgSrc, title, tags, introduce }} />
                </CardContainer>

                <CardContainer>
                  {group[id + 1] && (
                    <GroupCard card={{ imgSrc, title, tags, introduce }} />
                  )}
                </CardContainer>

                <CardContainer>
                  {group[id + 2] && (
                    <GroupCard card={{ imgSrc, title, tags, introduce }} />
                  )}
                </CardContainer>
              </CardsContainer>
            );
          }
        })}
      </GroupContainer>
    </ParticipatingCardContainer>
  );
};

export default ParticipatingGroup;

const ParticipatingCardContainer = styled.article`
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const GroupContainer = styled.article`
  display: flex;
  gap: 4rem;
  flex-direction: column;

  max-height: 58.2rem;
  overflow-y: auto;

  width: 100%;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 1.8rem;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;

  width: 29.6rem;
  height: 27.1rem;
`;
