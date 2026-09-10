import Appname from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoApp1 from "./components/TodoAPp1";
import TodoApp2 from "./components/TodoApp2";
import "./App.css";


function App(){
  return(
    <center className="container">
      <Appname/>
      <AddTodo/>
      <div className="itemlist">
      <TodoApp1></TodoApp1>
     <TodoApp2></TodoApp2>
     </div>
      
      
  
      
    </center> 
  )
}

export default App
