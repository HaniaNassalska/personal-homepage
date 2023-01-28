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

const Success = () => (
  <Wrapper>
    <ContentContainer>
      <GitHubIco alt="" />
      <Header>Portfolio</Header>
      <Paragraph>My recent projects</Paragraph>
    </ContentContainer>
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

export default Success;