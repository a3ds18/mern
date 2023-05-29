import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutsForm = () => {
    const {dispatch}= useWorkoutsContext();
    const [title, setTitle]= useState('');
    const [load, setLoad]= useState('');
    const [reps, setReps]= useState('');
    const [error, setError]= useState(null);
    const [emptyFields, setEmptyFields]= useState([]);

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
            setError(json.error);
            setEmptyFields(json.emptyField);
        }
        if(response.ok){
            setTitle('');
            setReps('');
            setLoad('');
            setError(null);
            console.log(json);
            console.log("new workout added");
            dispatch({ type:"CREATE_WORKOUTS" , payload : json });
            setEmptyFields([]);
        }
 
           }
    return ( 
        <form action="" className="create" onSubmit={handleSubmit}>
            <h3> add a new workout </h3>

            <label htmlFor="">Exrsize title:</label>
            <input type="text"
            onChange={(e) =>setTitle(e.target.value)}
            value={title} 
            className={emptyFields.includes("title") ? "error" : ""}/>

            <label htmlFor="">Load (in kg) :</label>
            <input type="number"
            onChange={(e) =>setLoad(e.target.value)}
            value={load} 
            className={emptyFields.includes("load") ? "error" : ""}
            />

            <label htmlFor="">reps :</label>
            <input type="number"
            onChange={(e) =>setReps(e.target.value)}
            value={reps} 
            className={emptyFields.includes("reps") ? "error" : ""}
            />

            <button >Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
     );
}
 
export default WorkoutsForm;