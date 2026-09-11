import FoodItems from './components/fooditems'
import ErrorMessage from './components/errormessage';

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let fooditems=['Dal','Green Vegetable','Roti','Salad','Milk'];
  // let fooditems=[];

  // if(fooditems.length==0){
  //   return <h3>I am Still hungry</h3>
  // }

  return (
  <>
  <h1>This is my List</h1>
  <ErrorMessage items={fooditems}></ErrorMessage>
  <FoodItems items={fooditems}></FoodItems>
</>
  )
}

export default App
