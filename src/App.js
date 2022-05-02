import "./App.css";
import Counter from "./Components/Counter";
import ToDo from "./Components/ToDo";
import { useSelector } from 'react-redux';

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="App bg-red-700">
      <Counter />
      <ToDo />
      {/* <h1>{seconds}</h1> */}
    </div>
  );
}

// const mapStateToProps = ({ seconds }) => ({ seconds });
// export default connect()(App);
export default App;