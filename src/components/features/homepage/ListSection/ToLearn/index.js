import { Divider, Item, ListWrapper, LearnList, Wrapper, Header } from "../styled";
import { toLearn } from "../listOfSkills";


const ToLearn = ({ listItems }) => (
  <Wrapper>
    <Header>
      What I want to learn next?
    </Header>
    <Divider />
    <ListWrapper>
      <LearnList>
        {toLearn.map(item =>
          <Item key={item}>{item}</Item>)}
      </LearnList>
    </ListWrapper>

  </Wrapper>
);

export default ToLearn;