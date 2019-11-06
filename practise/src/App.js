import React from 'react';
import './App.css';
// import Greet from './component/greet';
// import Welcome from './component/welcome';
import Hello from './component/hello';
// import FunctionClick from './component/functionclick';
import Parent from './component/parent';
import Tictactoe from './component/tictactoe';
import Namelist from './component/namelist';
import Forms from './component/forms';
function App() {
  return (
    <div className="App">
      <Forms />
      {/* <Greet name="siva"/> */}
      {/* <Greet name="rama"/> */}
      {/* <Greet /> */}
      {/* <Welcome name="krishna"/> */}
      {/* <Welcome name="madduri"/> */}
      {/* <Welcome /> */}
      <Hello />
      {/* <FunctionClick /> */}
      <Parent />
      {/* <Tictactoe /> */}
      <Namelist />
    </div>
  );
}

export default App;
