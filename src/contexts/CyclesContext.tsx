import { createContext, ReactNode, useState, useReducer } from "react"
import { Cycle } from "../reducers/cycles";
import { cyclesReducer, ActionTypes } from '../reducers/cycles'

interface CreteCycleData {
 task: string;
 minutesAmount: number
}

interface CyclesContextType {
 cycles: Cycle[]
 activeCycle: Cycle | undefined
 activeCycleId: string | null
 amountSecondsPassed: number
 markCurrenteCycleAsFinished: () => void
 setSecondsPassed: (seconds: number) => void
 createNewCycle: (data: CreteCycleData) => void
 interruptCurrentCycle: () => void
}

interface CyclesContextProviderProps {
 children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({ children } : CyclesContextProviderProps ) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  })

 const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
 
 const { cycles, activeCycleId } = cyclesState
 const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

 function setSecondsPassed(seconds: number) {
  setAmountSecondsPassed(seconds)
 }

 function markCurrenteCycleAsFinished() {
  dispatch({
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
    payload: {
      activeCycleId
    }
  })
 }

 function createNewCycle(data: CreteCycleData) {
  const id = String(new Date().getTime())

  const newCycle: Cycle = {
    id,
    task: data.task,
    minutesAmount: data.minutesAmount,
    startDate: new Date()
  }

  dispatch({
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    }
  })

  setAmountSecondsPassed(0)
 }

 function interruptCurrentCycle() {
  dispatch({
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
    payload: {
      activeCycleId,
    }
  })
 }

 return(
  <CyclesContext.Provider 
    value={{
     cycles,
     activeCycle, 
     activeCycleId, 
     amountSecondsPassed,
     markCurrenteCycleAsFinished,
     setSecondsPassed,
     createNewCycle,
     interruptCurrentCycle
    }}
    >
    { children }
  </CyclesContext.Provider>
 )
}