import { useSelector } from "react-redux";
import { selectProjects } from "../../homepageSlice";
import {
  ContentContainer,
  GitHubIco,
  Header,
  Paragraph,
  PortfolioTile,
  TileHeader,
  TileText,
  TileTextLink,
  Wrapper,
  TileLink,
  LinkWrapper
} from "../styled";

const SuccessView = () => {
  const projects = useSelector(selectProjects)

  return (
    <Wrapper>
      <ContentContainer>
        <GitHubIco alt="" />
        <Header>Portfolio</Header>
        <Paragraph>My recent projects</Paragraph>
      </ContentContainer>
      {projects.map(project => (
        <PortfolioTile  key={project.id}>
          <TileHeader>{(project.name.replaceAll( "-", " ").replaceAll("_", " "))}</TileHeader>
          <TileText >  {project.description}</TileText>
          <LinkWrapper>
          <TileTextLink> Demo: </TileTextLink><TileLink href={project.homepage}>{project.homepage}</TileLink>
         

          <TileTextLink> Code: </TileTextLink> <TileLink href={project.html_url}> {project.html_url}</TileLink>
          </LinkWrapper>

        </PortfolioTile>
      ))


      }
    </Wrapper>
  )
};

export default SuccessView;