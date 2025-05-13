import { createContext, ReactNode, useState, useReducer } from "react"
import { Cycle } from "../reducers/cycles/reducer";
import { cyclesReducer } from '../reducers/cycles/reducer'
import { addNewCycleAction, markCurrentCycleAsFinishedAction, interruptCurrentCycleAction } from "../reducers/cycles/actions";

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
  dispatch(markCurrentCycleAsFinishedAction())
 }

 function createNewCycle(data: CreteCycleData) {
  const id = String(new Date().getTime())

  const newCycle: Cycle = {
    id,
    task: data.task,
    minutesAmount: data.minutesAmount,
    startDate: new Date()
  }

  dispatch(addNewCycleAction(newCycle))

  setAmountSecondsPassed(0)
 }

 function interruptCurrentCycle() {
  dispatch(interruptCurrentCycleAction())
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