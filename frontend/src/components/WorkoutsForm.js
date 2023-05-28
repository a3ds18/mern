import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutsForm = () => {
    const {dispatch}= useWorkoutsContext();
    const [title, setTitle]= useState('');
    const [load, setLoad]= useState('');
    const [reps, setReps]= useState('');
    const [error, setError]= useState(null);

    const handleSubmit= async (e) => {
        e.preventDefault();
        const workout={title ,load,reps}
        const response = await fetch('/api/workouts',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json= await response.json();

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('');
            setReps('');
            setLoad('');
            setError(null);
            console.log(json);
            console.log("new workout added");
            dispatch({ type:"CREATE_WORKOUTS" , payload : json });
        }
 
           }
    return ( 
        <form action="" className="create" onSubmit={handleSubmit}>
            <h3> add a new workout </h3>

            <label htmlFor="">Exrsize title:</label>
            <input type="text"
            onChange={(e) =>setTitle(e.target.value)}
            value={title} />

            <label htmlFor="">Load (in kg) :</label>
            <input type="number"
            onChange={(e) =>setLoad(e.target.value)}
            value={load} />

            <label htmlFor="">reps :</label>
            <input type="number"
            onChange={(e) =>setReps(e.target.value)}
            value={reps} />

            <button >Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
     );
}
 
export default WorkoutsForm;