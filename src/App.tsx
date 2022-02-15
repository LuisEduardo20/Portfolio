import { GlobalStyle } from "./styles/global";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className='App'>
      <Header />

      <Main />

      <GlobalStyle />
    </div>
  );
}

export default App;
