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
      <Text>
        Let's talk!
      </Text>
    </TextContainer>
    <Mail href="mailto:hanna.nassalska@gmail.com">hanna.nassalska@gmail.com</Mail>
    <Paragraph>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me</Paragraph>
    <IcoContainer>
      <IcoLink href="https://github.com/HaniaNassalska">
        <GitHubIco alt="GitHub"/>
        </IcoLink>
      <IcoLink href="https://pl.linkedin.com/">
        <LinkedInIco alt="LinkedIn"/>
        </IcoLink>
    </IcoContainer>
  </Wrapper>
);

export default Footer;