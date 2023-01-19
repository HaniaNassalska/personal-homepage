import { Container } from "./components/common/Container/styled";
import Hero from "./components/features/Hero";
import Portfolio from "./components/features/Portfolio";
import Footer from "./components/features/Footer";
import Skills from "./components/features/Skills";
import Learn from "./components/features/Learn";
function App() {
  return (
    <Container>
      <Hero/>
      <Skills
       title={"K"} />
      <Learn
       title={"K"} 
      />
      <Portfolio
        title={"K"} />
      <Footer
        title={"K"} />
    </Container>
  );
}

export default App;