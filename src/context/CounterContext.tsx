import { createContext, useState, useReducer, useEffect } from "react";


type ActionType = {
    type : 'INCREMENT' | 'DECREMENT'
    payload : number
}

const counterReducer = (state : number[], action : ActionType) : number[] => {
    switch(action.type) {
      case "INCREMENT":
        return [...state, action.payload]
      default:
        return state
    }
}

const initialState = [] as number[]

type CounterContextType = {
    counter: number[]
    dispatchCounter: React.Dispatch<ActionType>
}

export const CounterContext = createContext<CounterContextType>({counter: initialState, dispatchCounter : () => {}})

type CounterContextProviderProps = {
  children : React.ReactNode
}



export default function CounterContextProvider ({children, } : CounterContextProviderProps) {

//   const [counter, setCounter] = useState<number>(0)

  const [counter, dispatchCounter] = useReducer(counterReducer, initialState)

  return (  
      <CounterContext.Provider value={{ counter, dispatchCounter}}>
          {children}
      </CounterContext.Provider>
  )
}