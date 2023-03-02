import { useDispatch, useSelector } from "react-redux";
import {
  Wrapper,
  ThemeChanger,
  Text,
  Image,
  About,
  IntroductionText,
  Name,
  Info,
  HireGraphic,
  Mail,
  HireGraphicDM,
} from "./styled";
import myPhoto from "./images/Hania-cv-sepia.png";
import { ReactComponent as ToggleOffLlight } from "./images/ToggleOff-light.svg";
import { ReactComponent as ToggleOffDark } from "./images/ToggleOff-dark.svg";
import { selectTheme, toggleTheme } from "./themeSwitcher/themeSlice";

const Hero = () => {
  const theme = useSelector(selectTheme);
  const dispach = useDispatch();

  return (
    <Wrapper>
      <ThemeChanger
        onClick={() => dispach(toggleTheme())}
      >
        {theme === false ?
          <>
            <Text>dark mode off</Text>
            <ToggleOffLlight
              title="Dark mode off"
              alt=""
            />
          </>
          :
          <>
            <Text>dark mode on</Text>
            <ToggleOffDark
              title="Dark mode on"
              alt=""
            />
          </>
        }
      </ThemeChanger>
      <Image
        src={myPhoto}
        alt=""
      />
      <About>
        <IntroductionText>This is</IntroductionText>
        <Name>Hanna Nassalska</Name>
        <Info>I feel like being ready to find a job as Junior Frontend Developer.
          I love learning new things and challenging myself!</Info>
        <Mail href="mailto:hanna.nassalska@gmail.com">
          {theme === false ?
            <>
              <HireGraphic
                title="Hire me"
                alt="Hire me - mail to me" />
            </>
            :
            <>
              <HireGraphicDM
                title="Hire me"
                alt="Hire me - mail to me" />
            </>
          }
        </Mail>
      </About>
    </Wrapper>
  )
};

export default Hero;