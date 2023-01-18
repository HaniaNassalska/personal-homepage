import { Image } from "./Image/styled";
import { Wrapper } from "./styled";
import ThemeChanger from "./ThemeChanger";
import myPhoto from "./images/Hania-cv-sepia.png"
const Hero = () => (
  <Wrapper>
    <ThemeChanger
      text={"dark mode off"}
    />
    <Image
      src={myPhoto}
    />
  </Wrapper>
);

export default Hero;