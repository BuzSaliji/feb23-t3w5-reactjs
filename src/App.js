// import logo from './logo.svg';
import './App.css';

// Import custom JSX element:
import FruitList from './FruitList';

// some comment here 


function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <ul>
        {/* Array of li tags with fruit names as contents */}
        {/* Use custom JSX element: */}
        <h1>Yellow fruits</h1>
        <FruitList listToShow={["banana","mango","lemon", "pineapple"]} /> 

        <h1>Green fruits</h1>
        <FruitList listToShow={["apple","kiwi","lime"]} >
          <h3>Green grapes are typically not riupe, but some are good to go</h3> 
        </FruitList>

        <h1>Blue fruits</h1>
        <FruitList listToShow={["blueberry","blue plumb", "blackberry", "grape", "concord grape"]} >

          <h3>Blue fruits are rare, because blue is rare in nature</h3>
          <h4>Blue fruits are cool</h4>
        </FruitList>

      </ul>
    </div>
  );
}

export default App;