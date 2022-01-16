import { useState } from 'react';
import './App.css';
import GrandFather from './component/GrandFather/GrandFather';
function App() {
  const [house, setHouse] = useState(1);
  return (
    <div className="App">
      <button onClick={() => setHouse(house + 1)}>Buy a new house</button>
      <GrandFather house={house}></GrandFather>
    </div>
  );
}

export default App;
