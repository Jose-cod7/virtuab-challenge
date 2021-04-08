import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Header from './components/Header';
import Cryptocurrencies from "./components/Cryptocurrencies";
import LineChart from "./components/GraphChart";

function App() {
  return (
    <div className="App">
      <Cryptocurrencies />
      <LineChart />
    </div>
  );
}

export default App;
