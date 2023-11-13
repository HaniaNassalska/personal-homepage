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
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ThemeChanger onClick={() => dispatch(toggleTheme())}>
        {theme === false ? (
          <>
            <Text>dark mode off</Text>
            <ToggleOffLlight title="Dark mode off" alt="" />
          </>
        ) : (
          <>
            <Text>dark mode on</Text>
            <ToggleOffDark title="Dark mode on" alt="" />
          </>
        )}
      </ThemeChanger>
      <Image src={myPhoto} alt="" />
      <About>
        <IntroductionText>This is</IntroductionText>
        <Name>Hanna Nassalska</Name>
        <Info>Hello! My name is Hania and this is my personal page.</Info>
        <Info>
          I have 1.5 years of experience in Front-end. I have created around 60
          projects, both comprehensive applications and task-based projects,
          including team projects - you can find them below! I work in React,
          TypeScript, Node.js, HTML, CSS, Sass and I’m not stopping there!
        </Info>
        <Info>How did my Front-end adventure start?</Info>
        <Info>
          In my previous job, I worked in a team with Web Developers as a
          Project Manager and IT started to fascinate me - so I decided to try
          it. At first, I wanted to improve my skills as an IT Project Manager,
          but I fell in love with programming and decided to become a Front-end
          Developer myself.
        </Info>
        <Info>
          I’m very determined, that’s why I try harder than others! I’m an
          open-minded person. I like learning new things and I know how to look
          for answers to questions. I want to learn more and more! Right now, I
          am developing my Full-stack skills (Node.js).
        </Info>
        <Info>
          PS: Don't be surprised if you find some strange repo - I'm probably
          learning something new at the moment. 😉
        </Info>
        <Mail href="mailto:hanna.nassalska@gmail.com">
          {theme === false ? (
            <>
              <HireGraphic
                title="hanna.nassalska@gmail.com"
                alt="Hire me - mail to me"
              />
            </>
          ) : (
            <>
              <HireGraphicDM
                title="hanna.nassalska@gmail.com"
                alt="Hire me - mail to me"
              />
            </>
          )}
        </Mail>
      </About>
    </Wrapper>
  );
};

export default Hero;
