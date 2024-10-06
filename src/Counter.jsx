import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)
    console.log(count)
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () =>{
        const decreasCount = count - 1;
        setCount(decreasCount)
    }
    return(
        <div style={{border:'2px solid yellow'}}>
            <h2>Counter :{count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Remove</button>
        </div>
       
    )
}