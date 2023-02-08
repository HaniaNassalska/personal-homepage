import { Container } from "./components/common/Container/styled";
import Hero from "./components/features/homepage/Hero";
import Portfolio from "./components/features/homepage/Portfolio";
import Footer from "./components/features/homepage/Footer";
import Skills from "./components/features/homepage/ListSection/Skills";
import ToLearn from "./components/features/homepage/ListSection/ToLearn";
function App() {
  return (
    <Container>
      <Hero/>
      <Skills/>
      <ToLearn/>
      <Portfolio/>
      <Footer/>
    </Container>
  );
}

export default App;