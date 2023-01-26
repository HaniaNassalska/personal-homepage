import { Container } from "./components/common/Container/styled";
import Hero from "./components/features/Hero";
import Portfolio from "./components/features/Portfolio";
import Footer from "./components/features/Footer";
import { skills, toLearn } from "./components/features/ListSection/listOfSkills";
import Skills from "./components/features/ListSection/Skills";
import ToLearn from "./components/features/ListSection/ToLearn";
function App() {
  return (
    <Container>
      <Hero/>
      <Skills
      title={"My skillset includes:"}
      listItems={skills}
      />
      <ToLearn 
       title={"What I want to learn next?"}
       listItems={toLearn}
      />
      <Portfolio/>
      <Footer/>
    </Container>
  );
}

export default App;