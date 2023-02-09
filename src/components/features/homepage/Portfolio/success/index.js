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
  const projects = useSelector(selectProjects)
  return (
    <Wrapper>
      <ContentContainer>
        <GitHubIco alt="" />
        <Header>Portfolio</Header>
        <Paragraph>My recent projects</Paragraph>
      </ContentContainer>
      {projects.map(project => {
        const projectNameWithoutDash =
          (project.name.replaceAll("-", " ")
          ).replaceAll("_", " ");
        const nameOfProjects =
          projectNameWithoutDash.charAt(0).toUpperCase()
          + projectNameWithoutDash.slice(1);
        return (
          <PortfolioTile key={project.id}>
            <TileHeader>
              {nameOfProjects}
            </TileHeader>
            <TileText >
              {project.description}
            </TileText>
            <LinkWrapper>
              <TileTextLink> Demo: </TileTextLink>
              <TileLink
                href={project.homepage}>
                {project.homepage}
              </TileLink>
              <TileTextLink> Code: </TileTextLink>
              <TileLink
                href={project.html_url}>
                {project.html_url}
              </TileLink>
            </LinkWrapper>
          </PortfolioTile>
        )
      })
      }
    </Wrapper>
  )
};

export default SuccessView;