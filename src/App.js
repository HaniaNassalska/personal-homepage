import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Container } from "./components/common/Container/styled";
import Hero from "./components/features/homepage/Hero";
import Portfolio from "./components/features/homepage/Portfolio";
import Footer from "./components/features/homepage/Footer";
import Skills from "./components/features/homepage/ListSection/Skills";
import ToLearn from "./components/features/homepage/ListSection/ToLearn";
import { lightTheme, darkTheme } from "./theme";
import { useSelector } from 'react-redux';
import { selectTheme } from './components/features/homepage/Hero/themeSwitcher/themeSlice';

function App() {
  const theme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <Hero />
        <Skills />
        <ToLearn />
        <Portfolio />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;