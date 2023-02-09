import './App.css';
import { BarChart } from './components/BarChart';
import { DATA } from './data';

function App() {
  return (
    <div className="App">
      <BarChart data={DATA}/>
    </div>
  );
}

export default App;
