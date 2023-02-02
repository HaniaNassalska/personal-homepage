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
  TileLink
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
        <PortfolioTile>
          <TileHeader key={project.id}>{project.name}</TileHeader>
          <TileText >  {project.descriotion}</TileText>
          <TileTextLink key={project.id}>Demo: {project.homepage}<TileLink></TileLink></TileTextLink>
          <TileTextLink key={project.id}>Code: {project.html_url}<TileLink></TileLink></TileTextLink>
        </PortfolioTile>
      ))


      }
    </Wrapper>
  )
};

export default SuccessView;