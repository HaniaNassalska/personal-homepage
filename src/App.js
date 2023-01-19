import { Container } from "./components/Container/styled";
import Hero from "./components/Hero";
import ListContainer from "./components/ListContainer";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
function App() {
  return (
    <Container>
      <Hero/>
      <ListContainer
        title={"K"} />
      <ListContainer
        title={"K"} />
      <Portfolio
        title={"K"} />
      <Footer
        title={"K"} />
    </Container>
  );
}

export default App;