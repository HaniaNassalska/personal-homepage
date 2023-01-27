import { Divider, Item, ListWrapper, StyledList, Wrapper, Header } from "../styled";

const Skills = ({ title, listItems }) => (
  <Wrapper>
    <Header>
      {title}
    </Header>
    <Divider />
    <ListWrapper>
    <StyledList>
      {listItems.map(item => 
        <Item key={item}>{item}</Item> )}
               
      </StyledList>
    </ListWrapper>

  </Wrapper>
);

export default Skills;