import "./App.css";

import Header from "./components/Header";
import LeftNavEmail from "./components/LeftNavEmail";
import MainEmail from "./components/MainEmail";

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />

      <LeftNavEmail />
      <MainEmail />
    </div>
  );
}

export default App;
