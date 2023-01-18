import { Wrapper, ModeText, Text } from "./styled";
import { ReactComponent as ToggleOffLlight } from "../images/ToggleOff-light.svg"
const ThemeChanger = ({ text }) => (
  <Wrapper>
    <ModeText>
      <Text>
        {text}
      </Text>
    </ModeText>
    <ToggleOffLlight
      title="Dark mode off"
    />
  </Wrapper>
);

export default ThemeChanger;