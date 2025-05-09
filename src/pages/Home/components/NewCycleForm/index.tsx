import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function NewCycleForm() {
 return(
  <FormContainer>
  <label htmlFor="task">Vou trabalhar em</label>
  <TaskInput 
   id="task" 
   list="task-suggestions"
   placeholder='Dê um nome ao seu projeto'
   disabled={!!activeCycle}
   {...register('task')}
  />

  <datalist id="task-suggestions">
   <option value="projeto 1"></option>
   <option value="banana"></option>
  </datalist>

  <label htmlFor="minutesAmount">durante</label>
  <MinutesAmountInput 
   type="number" 
   id="minutesAmount"
   placeholder='00'
   step={5}
   min={1}
   max={60}
   disabled={!!activeCycle}
   {...register('minutesAmount', { valueAsNumber : true})}
  />

  <span>minutes.</span>
 </FormContainer>
 )
}