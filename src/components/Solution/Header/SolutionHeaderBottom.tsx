import styled from 'styled-components';
import { IcLinkPurple } from '../../../assets';

export interface SolutionHeaderBottomProps {
  tags: Array<string>;
  platform: string;
  problemUrl: string;
}

const SolutionHeaderBottom = ({
  tags,
  platform,
  problemUrl,
}: SolutionHeaderBottomProps) => {
  return (
    <HeaderBottomContainer>
      <Tag>{tags.join(', ')}</Tag>
      <Platform>{platform}</Platform>
      <LinkContainer>
        <IcLinkPurple />
        <Link>{problemUrl}</Link>
      </LinkContainer>
    </HeaderBottomContainer>
  );
};

export default SolutionHeaderBottom;

const HeaderBottomContainer = styled.ul`
  display: flex;
  gap: 1.8rem;
  justify-content: center;

  width: 100%;
  margin-bottom: 2.2rem;
`;

const CommonTagStyle = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.codrive_purple};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const Tag = styled(CommonTagStyle)`
  flex-grow: 2.8;

  min-width: 34.9rem;

  padding: 1.5rem 0 1.4rem;
`;

const Platform = styled(CommonTagStyle)`
  flex-grow: 1;

  min-width: 12.4rem;

  padding: 1.5rem 0 1.4rem;
`;

const LinkContainer = styled(CommonTagStyle)`
  flex-grow: 3.4;

  min-width: 41.7rem;

  padding: 1.2rem 0;
`;

const Link = styled.p`
  width: 35.1rem;
  margin-left: 0.8rem;

  color: ${({ theme }) => theme.colors.codrive_purple};
  ${({ theme }) => theme.fonts.title_bold_16};

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
`;
