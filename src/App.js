import { Container } from "./components/common/Container/styled";
import Hero from "./components/features/Hero";
import ListSection from "./components/features/ListSection";
import Portfolio from "./components/features/Portfolio";
import Footer from "./components/features/Footer";
import { skills, toLearn } from "./components/features/ListSection/skillsList";
function App() {
  return (
    <Container>
      <Hero/>
      <ListSection 
      title={"My skillset includes  🛠️"}
      listItems={skills}
      />
      <ListSection 
       title={"What I want to learn next  🚀 "}
       listItems={toLearn}
      />
      <Portfolio/>
      <Footer/>
    </Container>
  );
}

export default App;