
import './App.css'
import Clockheading from './components/clockheading';
import Clockmoto from './components/clockmoto';
import Currenttime from './components/currenttime';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  

  return (
    <center>
      <Clockheading></Clockheading>
      <Clockmoto></Clockmoto>
      <Currenttime></Currenttime>
    </center>
  )
}

export default App
