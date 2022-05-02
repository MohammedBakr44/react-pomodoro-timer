import "./App.css";
import Counter from "./Components/Counter";
import ToDo from "./Components/ToDo";

function App() {
  return (
    <div className="App bg-red-700">
      <Counter />
      <ToDo />
    </div>
  );
}

export default App;
