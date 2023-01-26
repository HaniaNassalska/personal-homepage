import { Divider, Item, ListWrapper, LearnList, Wrapper, Header } from "../styled";

const ToLearn = ({ title, listItems }) => (
  <Wrapper>
    <Header>
      {title}
    </Header>
    <Divider />
    <ListWrapper>
    <LearnList>
      {listItems.map(item => 
        <Item key={item}>{item}</Item> )}
               
      </LearnList>
    </ListWrapper>

  </Wrapper>
);

export default ToLearn;