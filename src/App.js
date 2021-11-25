import SummaryCard from "./Components/SummaryCard";
import {ThemeProvider} from "styled-components"; //themeProvider for global themes

const theme = {
  veryPalBlue: "hsl(225, 100%, 98%)",
  desaturatedBlue: "hsl(224, 23%, 55%)",
  darkBlue: "hsl(223, 47%, 23%)",
  paleBlue: "hsl(225, 100%, 94%)",
  brightBlue: "hsl(245, 75%, 52%)",
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SummaryCard/>
      </div>
    </ThemeProvider>
  );
}

export default App;
