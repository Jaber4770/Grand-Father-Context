import { createContext, useState } from 'react';
import './App.css';
import GrandFather from './component/GrandFather/GrandFather';

export const RingContext = createContext('ring');

function App() {
  const [house, setHouse] = useState(1);
  const ornaments = 'Dimond Ring';
  return (
    <RingContext.Provider value={[ornaments, house]}>
      <div className="App">
        <button onClick={() => setHouse(house + 1)}>Buy a new house</button>
        <GrandFather ornaments={ornaments} house={house}></GrandFather>
      </div>
    </RingContext.Provider>
  );
}

export default App;
