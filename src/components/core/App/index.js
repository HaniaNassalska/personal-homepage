import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Container } from "../../common/Container/styled";
import Hero from "../../features/homepage/Hero";
import Portfolio from "../../features/homepage/Portfolio";
import Footer from "../../features/homepage/Footer";
import Skills from "../../features/homepage/ListSection/Skills";
import ToLearn from "../../features/homepage/ListSection/ToLearn";
import { lightTheme, darkTheme } from "./theme";
import { useSelector } from 'react-redux';
import { selectTheme } from '../../features/homepage/Hero/themeSwitcher/themeSlice';

function App() {
  const theme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={theme === true ? darkTheme : lightTheme}>
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