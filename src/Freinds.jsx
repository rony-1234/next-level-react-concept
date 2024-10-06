 import { useEffect, useState } from 'react'
import './Freinds.css'
import Freind from './Freind'
export default function Freinds(){
    const [freinds, setFreinds] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data =>setFreinds(data))
    },[])


    return (
        <div className="box">
             <h3>Freinds : {freinds.length}</h3>
             {
                freinds.map(freind =><Freind freind={freind}></Freind>)
             }
        </div>
    )
}

// state hold korte hobe 
// useEffect with dependency array
// fetch er modde data load korte hobe
// display data in the screen