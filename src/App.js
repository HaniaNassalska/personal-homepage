import { Container } from "./components/Container/styled";
import ThemeChanger from "./components/ThemeChanger";
import Hero from "./components/Hero";
import List from "./components/List";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
function App() {
  return (
    <Container>
    <ThemeChanger/>
    <Hero
    title={"K"}/>
    <List
    title={"K"}/>
    <List
    title={"K"}/>
    <Portfolio
    title={"K"}/>
    <Footer
    title={"K"}/>
    </Container>
  );
}

export default App;