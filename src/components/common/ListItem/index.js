import { ElipseWrapper, Item } from "./styled";
import { ReactComponent as Elipse } from "../../common/ListItem/ellipse.svg";

const ListItem = ({ text }) => (
  <Item>
    <ElipseWrapper>
      <Elipse />
    </ElipseWrapper>
    {text}
  </Item>
)

export default ListItem;