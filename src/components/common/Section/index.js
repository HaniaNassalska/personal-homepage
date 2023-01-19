import { StyledSection, Header, Divider} from "./styled";

const Section = ({title, body}) => (
  <StyledSection>

    <Header>
    {title}
    </Header>
    <Divider />
    
   {body}
  </StyledSection>
  );
  
  export default Section;