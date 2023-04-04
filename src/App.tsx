import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
