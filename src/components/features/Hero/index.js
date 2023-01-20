import {
  Wrapper,
  ThemeChanger,
  ModeText,
  Text,
  Image,
  About,
  IntroductionText,
  Name,
  Info,
  HireGraphic,
  Mail
} from "./styled";
import myPhoto from "./images/Hania-cv-sepia.png";
import { ReactComponent as ToggleOffLlight } from "./images/ToggleOff-light.svg";
import hireImage from "./images/Button-default-LM.svg";

const Hero = () => (
  <Wrapper>
    <ThemeChanger>
      <ModeText>
        <Text>dark mode off</Text>
      </ModeText>
      <ToggleOffLlight
        title="Dark mode off"
        alt="Dark mode off"
      />
    </ThemeChanger>
    <Image
      src={myPhoto}
    />
    <About>
      <IntroductionText>This is</IntroductionText>
      <Name>Hanna Nassalska</Name>
      <Info>👋 👩🏻‍💻I'm feel like being ready to find a job as Junior Frontend Developer.
        I love learning new things and challenging myself!</Info>
      <Mail href="mailto:hanna.nassalska@gmail.com">
        <HireGraphic
          src={hireImage}
          title="Hire me"
          alt="Hire me - mail to me" />
      </Mail>
    </About>
  </Wrapper>
);

export default Hero;