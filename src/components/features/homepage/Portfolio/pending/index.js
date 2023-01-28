import {
  ContentContainer,
  GitHubIco,
  Header,
  Paragraph,
  Wrapper
} from "../styled";
import { IcoSpinner } from "./styled";

const Pending = () => (
  <Wrapper>
    <ContentContainer>
      <GitHubIco alt="" />
      <Header>Portfolio</Header>
      <Paragraph>My recent projects</Paragraph>
    </ContentContainer>
    <ContentContainer>
      <Paragraph>Please wait, projects are being loaded...</Paragraph>
      <IcoSpinner alt="" />
    </ContentContainer>
  </Wrapper>
);

export default Pending;