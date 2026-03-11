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
          I'm a Front-end developer with over 3 years of experience. I work at 
          <b> Faktura.pl</b>, where I’m responsible for application development and bug fixing, 
          regularly working with AngularJS (with TypeScript) and PHP.           
        </Info>
        <Info>
          I focus on code quality, UI, and attention to detail. Recently, 
          I’ve been further developing my skills in Angular.
        </Info>
        <Info>
          I also have experience as a Project Manager. I worked in an
          organization, Fundacja Widzialni (Widzalni.eu), that promotes Web
          Content Accessibility Guidelines (WCAG). During my time there, I
          decided to broaden my IT knowledge, particularly in Front-end
          development, to enhance my skills as an IT Project Manager. However,
          after starting, I realized that I didn't want to be a PM, but rather a
          Developer – because I enjoyed it so much!
        </Info>
        <Info>
          I’m very determined, that’s why I try harder than others! I’m an
          open-minded person. I like learning new things and I know how to look
          for answers to questions. I want to learn more and more!
        </Info>
        <Info>
          In addition, I have completed approximately 60 projects, ranging from
          comprehensive applications to task-based projects. You can find them
          below. 😉
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
