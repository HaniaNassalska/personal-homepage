import { Divider, Item, ListWrapper, StyledList, Wrapper, Header } from "../styled";
import { skills } from "../listOfSkills";

const Skills = () => (
  <Wrapper>
    <Header>
      My skillset includes:
    </Header>
    <Divider />
    <ListWrapper>
      <StyledList>
        {skills.map(item =>
          <Item key={item}>{item}</Item>)}
      </StyledList>
    </ListWrapper>
  </Wrapper>
);

export default Skills;