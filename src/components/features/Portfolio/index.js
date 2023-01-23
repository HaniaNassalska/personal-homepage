import { Header, HeaderWrapper, Paragraph, PortfolioTile, TileHeader, TileLink, TileText, TileTextLink, Wrapper } from "./styled";
import { ReactComponent as GithubIco } from "./GithubIco.svg";

const Portfolio = () => (
  <Wrapper>
   <HeaderWrapper>
   <GithubIco/>
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