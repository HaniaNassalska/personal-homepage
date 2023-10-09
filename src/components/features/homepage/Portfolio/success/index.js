import {
  Wrapper,
  ContentContainer,
  GitHubIco,
  Header,
  Paragraph
} from "../styled";
import {
  PortfolioTile,
  TileHeader,
  TileText,
  TileTextLink,
  TileLink,
  LinkWrapper
} from "./styled"
import { useViewContent } from "./useViewContent";

const SuccessView = () => {
  const {first, second, third} = useViewContent();

  return (
    <Wrapper>
      <ContentContainer>
        <GitHubIco alt="" />
        <Header>Portfolio</Header>
        <Paragraph>My recent projects</Paragraph>
      </ContentContainer>

      {first.map((project) => (
        <PortfolioTile key={project.id}>
          <TileHeader>{project.name}</TileHeader>
          {project.description && <TileText>{project.description}</TileText>}
          <LinkWrapper>
            <TileTextLink> Demo: </TileTextLink>
            <TileLink href={project.homepage} target="_blank">{project.homepage}</TileLink>
            <TileTextLink> Code: </TileTextLink>
            <TileLink href={project.html_url} target="_blank">{project.html_url}</TileLink>
          </LinkWrapper>
        </PortfolioTile>
      ))}

      {second.map((project) => (
        <PortfolioTile key={project.id}>
          <TileHeader>{project.name}</TileHeader>
          {project.description && <TileText>{project.description}</TileText>}
          <LinkWrapper>
            <TileTextLink> Demo: </TileTextLink>
            <TileLink href={project.homepage} target="_blank">{project.homepage}</TileLink>
            <TileTextLink> Code: </TileTextLink>
            <TileLink href={project.html_url} target="_blank">{project.html_url}</TileLink>
          </LinkWrapper>
        </PortfolioTile>
      ))}

      {third.map((project) => (
        <PortfolioTile key={project.id}>
          <TileHeader>{project.name}</TileHeader>
          <LinkWrapper>
            <TileTextLink> Code: </TileTextLink>
            <TileLink href={`${project.html_url}/tree/develop`} target="_blank">{project.html_url}/tree/develop</TileLink>
          </LinkWrapper>
        </PortfolioTile>
      ))}
    </Wrapper>
  );
};

export default SuccessView;
