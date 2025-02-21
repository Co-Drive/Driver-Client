import styled from 'styled-components';
import { IcLinkWhite } from '../../../assets';
import { handleClickLink } from '../../../utils/handleClickLink';

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
      <Container>
        <Category>태그</Category>
        <Tag>{tags.join(', ')}</Tag>
      </Container>

      <Container>
        <Category>플랫폼</Category>
        <Platform>{platform}</Platform>
      </Container>

      <Container>
        <Category>링크 바로가기</Category>
        <LinkContainer onClick={() => handleClickLink(problemUrl)}>
          <IcLinkWhite />
          <Link>{problemUrl}</Link>
        </LinkContainer>
      </Container>
    </HeaderBottomContainer>
  );
};

export default SolutionHeaderBottom;

const HeaderBottomContainer = styled.ul`
  display: flex;

  width: 100%;
  padding-bottom: 2.2rem;
  padding-left: 0.7rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;

const Container = styled.li`
  display: flex;
  gap: 1.8rem;
  flex-direction: column;
`;

const Category = styled.span`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const CommonTagStyle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_medium_20};
`;

const Tag = styled(CommonTagStyle)`
  padding: 1.2rem 0.8rem 1.2rem 0;
  margin-right: 2.8rem;

  min-width: 44.5rem;
`;

const Platform = styled(CommonTagStyle)`
  padding: 1.2rem 0.8rem 1.2rem 0;
  margin-right: 2.6rem;

  min-width: 13.1rem;
`;

const LinkContainer = styled(CommonTagStyle)`
  display: flex;
  align-items: center;

  min-width: 28.9rem;

  padding: 1.2rem 0;

  cursor: pointer;
`;

const Link = styled.p`
  overflow: hidden;

  width: 25.7rem;
  margin-left: 0.8rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_medium_20};

  white-space: nowrap;
  text-overflow: ellipsis;
`;
