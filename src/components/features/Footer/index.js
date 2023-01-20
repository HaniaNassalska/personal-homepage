import { IcoContainer, IcoLink, Mail, Paragraph, Text, TextContainer, Wrapper } from "./styled";
import { ReactComponent as GithubIco } from "./Github.svg";
import { ReactComponent as LinkedIN } from "./LinkedIN.svg";

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
      <IcoLink><GithubIco/></IcoLink>
      <IcoLink><LinkedIN/></IcoLink>
    </IcoContainer>
  </Wrapper>
  );
  
  export default Footer;