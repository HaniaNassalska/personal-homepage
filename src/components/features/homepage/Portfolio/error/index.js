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
  H3Header
} from "./styled";

const ErrorView = () => (
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
      <Paragraph>
        You can check them directly on Github.
      </Paragraph>
      <GitHubLink href="https://github.com/HaniaNassalska">
        <GoToIco alt="Go to GitHub" />
      </GitHubLink>
    </ContentContainer>
  </Wrapper>
);

export default ErrorView;