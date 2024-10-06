
import './App.css'
import Counter from './Counter'
import Freinds from './Freinds'
import Team from './Team'
import Users from './Users'

function App() {

  function handleClick(){
    alert('added button')
  }
  const handlerClick = () =>{
    alert('addded the second button')
  }
   const addNumber = (num) =>{

    alert( num + 5)
    
   }

  return (
    <>
    
      <h1>Vite + React</h1>
      <Freinds></Freinds>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handlerClick}>Click 2</button>
      <button onClick={() =>addNumber(12)}>Click 3</button>
     
     
    </>
  )
}

export default App
