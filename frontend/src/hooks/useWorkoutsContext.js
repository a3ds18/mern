import { WorkoutContext } from "../components/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext= () =>{

    const context =useContext(WorkoutContext);
    if (!context) {
        throw Error("WorkoutContext must be used inside a WorkoutContextProvider");
    }
    return context;

} 