import logo from './logo.svg';
import './App.css';
import GrandFather from './component/GrandFather/GrandFather';
import Father from './component/Father/Father';
import Uncle from './component/Uncle/Uncle';

function App() {
  return (
    <div className="App">
      <GrandFather></GrandFather>
      <Father></Father>
      <Uncle></Uncle>
    </div>
  );
}

export default App;
