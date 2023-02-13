import { useSelector } from "react-redux";
import { selectTheme } from "../../Hero/themeSwitcher/themeSlice";
import {
  ContentContainer,
  GitHubIco,
  Header,
  Paragraph,
  Wrapper
} from "../styled";
import {
  DangerIco,
  GitHubLink,
  GoToIco,
  H3Header,
  ErrorParagraph,
  GoToIcoDM
} from "./styled";

const ErrorView = () => {
  const theme = useSelector(selectTheme);

  return (
    <Wrapper>
      <ContentContainer>
        <GitHubIco
          alt="GitHub"
        />
        <Header>Portfolio</Header>
        <Paragraph>My recent projects</Paragraph>
      </ContentContainer>
      <ContentContainer>
        <DangerIco
          alt=""
        />
        <H3Header>
          Ooops! Something went wrong...
        </H3Header>
        <Paragraph>
          Sorry, failed to load Github projects.
        </Paragraph>
        <ErrorParagraph>
          You can check them directly on Github.
        </ErrorParagraph>
        <GitHubLink href="https://github.com/HaniaNassalska">

          {theme === false ?
            <>
              <GoToIco alt="Go to GitHub" />
            </>
            :
            <>
              <GoToIcoDM alt="Go to GitHub" />
            </>
          }
        </GitHubLink>
      </ContentContainer>
    </Wrapper>
  );
};

export default ErrorView;