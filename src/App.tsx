import "./App.css";
import Counter from "./components/Counter";

// Store
//global state
type CounterState = {
  value: number;
};
type UserState = {
  isSignedIn: boolean;
};

// Actions
// tell redux what should do to the state
// Payload: are any data that you want to send to redux in action
const increment = { type: "INCREMENT" };
const incrementByAmount = { type: "INCREMENT_BY_AMOUNT", payload: 10 };
const decrement = { type: "DECREMENT" };

// Reducers
// responsible for taking an actions and depend on the type of the actions it will update the redux store


function App() {
  return (
    <div>
      <h2>Redux Complete Tutorial</h2>
      <Counter />
    </div>
  );
}

export default App;
