import { createContext, useState, useReducer, useEffect } from "react";

export type Workout = {
  _id : String
  title: String
  reps: Number
  load: Number
}

type ActionType = {
    type : 'ADD' | 'REMOVE'
    payload : Workout
}

function workoutReducer(state : {workouts: Workout| null}, action : ActionType){
    switch(action.type) {
      case "ADD":
        return {workouts: action.payload}
      default:
        return state
    }
}

const Initial : Workout = {
  _id : '12345',
  title: 'initial',
  reps: 30,
  load: 40
}

type WorkoutContextType = {
    workouts: Workout| null
    dispatchWorkout: React.Dispatch<ActionType>
}

export const WorkoutContext = createContext<WorkoutContextType>({workouts: null, dispatchWorkout : () => {}})

type CounterContextProviderProps = {
  children : React.ReactNode
}

export default function WorkoutContextProvider ({children, } : CounterContextProviderProps) {

//   const [counter, setCounter] = useState<number>(0)

  const [state, dispatchWorkout] = useReducer(workoutReducer, {workouts: null})
  debugger;

  return (  
      <WorkoutContext.Provider value={{ ...state, dispatchWorkout}}>
          {children}
      </WorkoutContext.Provider>
  )
}