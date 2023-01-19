import { Wrapper, List, Header, ListItem, HeaderContainer } from "./styled";

const ListContainer = ({title}) => (
  <Wrapper>
  <List>
    <Header>
    {title}
    </Header>
    <HeaderContainer />
    <ListItem>Lorem ipsum</ListItem>
    <ListItem>Lorem ipsum </ListItem>
  </List>
  </Wrapper>
  );
  
  export default ListContainer;