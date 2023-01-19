import { Section, List, Header, ListItem, Divider, ElipseWrapper, ListWrapper } from "./styled";
import { ReactComponent as Elipse } from "./ellipse.svg";

const ListContainer = ({title}) => (
  <Section>

    <Header>
    {title}
    </Header>
    <Divider />
    <ListWrapper>
    <List>
    <ListItem><ElipseWrapper><Elipse /></ElipseWrapper>Lorem ipsumipsumipsumipsumipsum</ListItem>
    <ListItem><ElipseWrapper><Elipse /></ElipseWrapper>Lorem ipsum</ListItem>
    <ListItem><ElipseWrapper><Elipse /></ElipseWrapper>Lorem ipsum</ListItem>
    <ListItem><ElipseWrapper><Elipse /></ElipseWrapper>Lorem ipsum</ListItem>
    <ListItem><ElipseWrapper><Elipse /></ElipseWrapper>Lorem ipsum</ListItem>
    <ListItem><ElipseWrapper><Elipse /></ElipseWrapper>Lorem ipsum</ListItem>
    <ListItem><ElipseWrapper><Elipse /></ElipseWrapper>Lorem ipsum</ListItem>
    <ListItem><ElipseWrapper><Elipse /></ElipseWrapper>Lorem ipsum</ListItem>
    <ListItem><ElipseWrapper><Elipse /></ElipseWrapper>Lorem ipsum</ListItem>
    <ListItem><ElipseWrapper><Elipse /></ElipseWrapper>Lorem ipsum</ListItem>
    <ListItem><ElipseWrapper><Elipse /></ElipseWrapper>Lorem ipsum</ListItem>
    <ListItem><ElipseWrapper><Elipse /></ElipseWrapper>Lorem ipsum</ListItem>
  </List>
    </ListWrapper>
   
  </Section>
  );
  
  export default ListContainer;