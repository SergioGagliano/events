import './App.css'
import { AlertClock } from './AlertClock'

  function handleButtonClick() {
    alert("Current time: " + new Date().toLocaleTimeString());
  }

function App() {

  return (
    <>
      <AlertClock clock={<button onClick={handleButtonClick}>Click Me!</button>}/>
    </>
  )
}

export default App
