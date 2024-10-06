import { useState } from "react";


const Team = () => {
    const [team,setTeam] = useState(11)
    console.log(team)

    const handleAddPlayer = () =>{
        const newTeam = team + 1;
        setTeam(newTeam)
    }

    const handleAddReducePlayer = () =>{
        setTeam(team -1)
    }

    return (
        <div style={{border:'3px solid green'}}>
            <h3>Players:{team}</h3>
            <button onClick={handleAddPlayer}>Add</button>
            <button onClick={handleAddReducePlayer}>Reduce</button>
        </div>
    );
};

export default Team;