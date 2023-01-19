import { ListWrapper, StyledList } from "./styled";



const List = ({item})=>(
  <ListWrapper>
          <StyledList>
          {item}
          </StyledList>
        </ListWrapper>
      
);

export default List;