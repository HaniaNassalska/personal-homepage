import { GitHubIco, Header, HeaderWrapper, Paragraph, PortfolioTile, TileHeader, TileLink, TileText, TileTextLink, Wrapper } from "./styled";

const Portfolio = () => (
  <Wrapper>
    <HeaderWrapper>
      <GitHubIco alt="GitHub"/>
      <Header>Portfolio</Header>
      <Paragraph>My recent projects</Paragraph>
    </HeaderWrapper>
    <PortfolioTile>
      <TileHeader>Homepage</TileHeader>
      <TileText> Lorem in nostrud laboris elit deserunt deserunt adipisicing nostrud commodo nostrud reprehenderit nulla cillum. .</TileText>
      <TileTextLink>Demo: <TileLink></TileLink></TileTextLink>
      <TileTextLink>Code: <TileLink></TileLink></TileTextLink>
    </PortfolioTile>
    <PortfolioTile>
      <TileHeader>Homepage</TileHeader>
      <TileText> Lorem in nostrud laboris elit deserunt deserunt adipisicing nostrud commodo nostrud reprehenderit nulla cillum. .</TileText>
      <TileTextLink>Demo: <TileLink></TileLink></TileTextLink>
      <TileTextLink>Code: <TileLink></TileLink></TileTextLink>
    </PortfolioTile>
  </Wrapper>
);

export default Portfolio;