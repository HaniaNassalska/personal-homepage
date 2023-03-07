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
        <Info>For 9 years I was engaged in project management in a NGO (IT sector).</Info>
         <Info>In my spare time, I like broadening my knowledge. Recently, I attended a Front-end developer course.</Info>
        <Info>I am sure I could be a valuable member of your team.
        </Info>
        <Mail href="mailto:hanna.nassalska@gmail.com">
          {theme === false ?
            <>
              <HireGraphic
                title="hanna.nassalska@gmail.com"
                alt="Hire me - mail to me" />
            </>
            :
            <>
              <HireGraphicDM
                title="hanna.nassalska@gmail.com"
                alt="Hire me - mail to me" />
            </>
          }
        </Mail>
      </About>
    </Wrapper>
  )
};

export default Hero;