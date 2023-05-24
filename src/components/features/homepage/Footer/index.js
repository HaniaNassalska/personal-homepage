import {
  Wrapper,
  TextContainer,
  Text,
  Mail,
  Paragraph,
  IcoContainer,
  IcoLink,
  GitHubIco,
  LinkedInIco,
} from "./styled";

const Footer = () => (
  <Wrapper>
    <TextContainer>
      <Text>Let's talk!</Text>
    </TextContainer>
    <Mail href="mailto:hanna.nassalska@gmail.com">
      hanna.nassalska@gmail.com
    </Mail>
    <Paragraph>I’m open to new projects. Feel free to contact me.</Paragraph>
    <IcoContainer>
      <IcoLink href="https://github.com/HaniaNassalska">
        <GitHubIco alt="GitHub" />
      </IcoLink>
      <IcoLink href="https://www.linkedin.com/in/hanna-nassalska-80b223269/">
        <LinkedInIco alt="LinkedIn" />
      </IcoLink>
    </IcoContainer>
  </Wrapper>
);

export default Footer;
