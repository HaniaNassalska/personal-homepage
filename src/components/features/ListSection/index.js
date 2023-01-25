import { Divider, Item, ListWrapper, StyledList, Wrapper, Header } from "./styled";

const ListSection = ({ title, listItems }) => (
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

export default ListSection;