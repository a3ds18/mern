import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({workout}) => {

    const {dispatch } = useWorkoutsContext();

    const handleClick = async ()=>{
        const uri='/api/workouts/'+workout._id;
        const response = await fetch(uri,{
        method: 'DELETE',

          
        })
        const json= await response.json();
        if(!response.ok){
            console.log(json.error)
        }
        if(response.ok){
           
            console.log(json);
            console.log("deleted");
            dispatch({ type:"DELETE_WORKOUTS" , payload : json });
        }
    }
    return ( <div className="workout-details">
        <h1>{workout.title}</h1>
        <p><strong> Load (kg) :</strong> {workout.load}</p>
        <p><strong> Reps :</strong> {workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span onClick={handleClick}>Delete</span>
    </div> );
}
 
export default WorkoutDetails;