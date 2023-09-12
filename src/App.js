// import logo from './logo.svg';
import './App.css';
// import some JSX element
import FruitList from './FruitList';

// some comment here


function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <ul>
        {/* Array of li tags with fruit names as contents */}
        {/* Use custom jsx element */}
        <FruitList />
      </ul>
    </div>
  );
}

export default App;
