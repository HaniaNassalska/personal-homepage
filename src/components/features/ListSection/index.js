import { Divider, Item, ListWrapper, StyledList, Wrapper, Header } from "./styled";

const ListSection = ({ title }) => (
  <Wrapper>
    <Header>
      {title}
    </Header>
    <Divider />
    <ListWrapper>
      <StyledList>
        <Item />
      </StyledList>
    </ListWrapper>

  </Wrapper>
);

export default ListSection;