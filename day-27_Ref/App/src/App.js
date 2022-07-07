import logo from './logo.svg';
import './App.css';

import ContentsRef from "./components/ContentsRef";
import Ref from "./components/Ref";
import RefFocus from "./components/RefFocus";
import StyleRef from "./components/StyleRef";

function App() {
  return (
    <div className="App">
      <ContentsRef />
      <Ref />
      <RefFocus />
      <StyleRef />
    </div>
  );
}

export default App;
