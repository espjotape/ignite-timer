import { createContext, ReactNode, useState, useReducer, useEffect } from "react"
import { Cycle } from "../reducers/cycles/reducer";
import { cyclesReducer } from '../reducers/cycles/reducer'
import { addNewCycleAction, markCurrentCycleAsFinishedAction, interruptCurrentCycleAction } from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns/differenceInSeconds";

interface CreteCycleData {
 task: string;
 minutesAmount: number
}

interface CyclesContextType {
 cycles: Cycle[]
 activeCycle: Cycle | undefined
 activeCycleId: string | null
 amountSecondsPassed: number
 theme: boolean
 switchTheme: () => void
 markCurrenteCycleAsFinished: () => void
 setSecondsPassed: (seconds: number) => void
 createNewCycle: (data: CreteCycleData) => void
 interruptCurrentCycle: () => void
}

interface CyclesContextProviderProps {
 children: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({ children } : CyclesContextProviderProps ) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  }, 
  (initialState) => {
    const storedStateAsJSON = localStorage.getItem(
      '@ignite-timer:cycles-state-1.0.0',
    )

    if(storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return initialState
  })

 const { cycles, activeCycleId } = cyclesState
 const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
 
 const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
  if(activeCycle) {
    return differenceInSeconds(
      new Date(), 
      new Date(activeCycle.startDate)
    );
  }
  
  return 0
 })
 
 useEffect(() => {
  const stateJSON = JSON.stringify(cyclesState)

  localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
 }, [cyclesState])


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

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('@ignite-timer:theme')
    return storedTheme ? storedTheme === 'true' : false
  })

  function switchTheme() {
    setTheme((prevTheme) => {
      const newTheme = !prevTheme
      localStorage.setItem('@ignite-timer:theme', String(newTheme))
      return newTheme
    })
  }

 return(
  <CyclesContext.Provider 
    value={{
     cycles,
     activeCycle, 
     activeCycleId, 
     amountSecondsPassed,
     theme,
     switchTheme,
     markCurrenteCycleAsFinished,
     setSecondsPassed,
     createNewCycle,
     interruptCurrentCycle
    }}
    >
    {children}
  </CyclesContext.Provider>
 )
}