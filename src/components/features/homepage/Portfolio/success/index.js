import { useSelector } from "react-redux";
import { selectProjects } from "../../homepageSlice";
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

const SuccessView = () => {
  const projects = useSelector(selectProjects);

  const firstTwoProjects = projects.filter(
    (project) => project.name === "personal-homepage" || project.name === "Movie-Browser"
  );
  
  const projectsWithHomepageWithoutFirstTwo = projects.filter(
    (project) => project.homepage && project.name !== "personal-homepage" && project.name !== "Movie-Browser"
  );

  const projectsWithoutHomepage = projects.filter(
    (project) => !project.homepage && project.name !== "layout_miami"
  );

  return (
    <Wrapper>
      <ContentContainer>
        <GitHubIco alt="" />
        <Header>Portfolio</Header>
        <Paragraph>My recent projects</Paragraph>
      </ContentContainer>

      {firstTwoProjects.map((project) => (
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

      {projectsWithHomepageWithoutFirstTwo.map((project) => (
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

      {projectsWithoutHomepage.map((project) => (
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
