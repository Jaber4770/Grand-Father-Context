import logo from './logo.svg';
import './App.css';
import GrandFather from './component/GrandFather/GrandFather';
import Father from './component/Father/Father';
import Uncle from './component/Uncle/Uncle';
import Aunty from './component/Aunty/Aunty';

function App() {
  return (
    <div className="App">
      <GrandFather house="5"></GrandFather>
    </div>
  );
}

export default App;
