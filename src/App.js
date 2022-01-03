import "normalize.css";
import { ThemeProvider } from "styled-components";
import { HomePage } from "./pages/HomePage";
import { GlobalStyles } from "./style-helpers/GlobalStyles";
import THEME_SCHEME from "./style-helpers/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={THEME_SCHEME}>
        <GlobalStyles />
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
