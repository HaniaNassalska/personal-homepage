import { Container } from "./components/common/Container/styled";
import Hero from "./components/features/Hero";
import ListSection from "./components/features/ListSection";
import Portfolio from "./components/features/Portfolio";
import Footer from "./components/features/Footer";

function App() {
  return (
    <Container>
      <Hero/>
      <ListSection 
      title={"My skillset includes  🛠️"}
      />
      <ListSection 
       title={"What I want to learn next  🚀 "}
      />
      <Portfolio/>
      <Footer/>
    </Container>
  );
}

export default App;