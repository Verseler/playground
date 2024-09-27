import "./App.css";
import AddNewProduct from "./components/AddNewProduct";
import AllProducts from "./components/AllProducts";
import SpecificProduct from "./components/SpecificProduct";

function App() {
  return (
    <div>
      <h2>Redux Complete Tutorial</h2>
      <AllProducts />
      {/* <SpecificProduct /> */}
      {/* <AddNewProduct /> */}
    </div>
  );
}

export default App;
