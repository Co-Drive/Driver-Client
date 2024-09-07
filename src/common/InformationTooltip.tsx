import styled from 'styled-components';

interface InformationTooltipProps {
  myNickname?: string;
  topContents: string;
  bottomContents: string;
}

const InformationTooltip = ({
  myNickname,
  topContents,
  bottomContents,
}: InformationTooltipProps) => {
  return (
    <Tooltip>
      {myNickname ? (
        <>
          <TextContainer>
            <Nickname>{myNickname}</Nickname>
            <Text>{topContents}</Text>
          </TextContainer>
          <Text>{bottomContents}</Text>
        </>
      ) : (
        <>
          <Text>{topContents}</Text>
          <Text>{bottomContents}</Text>
        </>
      )}
    </Tooltip>
  );
};

export default InformationTooltip;

const Tooltip = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  position: absolute;
  top: 3.2rem;
  visibility: hidden;

  width: fit-content;
  padding: 1.2rem 1.1rem;

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.gray600};

  transform: translate(-2.5%);
  transition: opacity 0.3s ease-in-out;

  &::after {
    position: absolute;
    bottom: 100%;
    left: 1.2rem;

    border-color: transparent transparent ${({ theme }) => theme.colors.gray600};
    border-width: 5px;
    border-style: solid;
    content: '';
  }
`;

const TextContainer = styled.div`
  display: flex;
  gap: 0.1rem;
  align-items: center;

  white-space: nowrap;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.codrive_green};
  font-size: ${({ theme }) => theme.fonts.detail_regular_12};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.body_ligth_12};

  white-space: nowrap;
`;
