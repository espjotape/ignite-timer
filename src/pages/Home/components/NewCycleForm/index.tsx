import { FormContainer, MinutesAmountInput, TaskInput, MinutesAmountContainer, PlusButton, MinusButton } from "./styles";
import { useContext } from 'react'
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { useFormContext } from "react-hook-form";
import { Minus, Plus } from "phosphor-react";

export function NewCycleForm() {
 const { register, setValue, watch } = useFormContext()
 const { activeCycle, cycles } = useContext(CyclesContext)

 const minutesAmount = watch('minutesAmount') || 0;

 const handleIncrement = () => {
  if (minutesAmount < 60) {
    setValue('minutesAmount', minutesAmount + 5);
  }
};

const handleDecrement = () => {
 if (minutesAmount > 5) {
   setValue('minutesAmount', minutesAmount - 5);
 }
};
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
   {cycles.map((cycle) => {
    return (
      <option 
      key={cycle.id} 
      value={cycle.task}
      >
       {cycle.task}
      </option>
    );
   })}
  </datalist>

  <label htmlFor="minutesAmount">durante</label>
   
  <MinutesAmountContainer>
   <MinusButton 
    disabled={!!activeCycle}
    type="button"
    onClick={handleDecrement}
    >
    <Minus size={16}/>
   </MinusButton>
   
   <MinutesAmountInput 
    type="number" 
    id="minutesAmount"
    placeholder='00'
    step={5}
    min={5}
    max={60}
    disabled={!!activeCycle}
    {...register('minutesAmount', { valueAsNumber : true})}
   />
   <PlusButton
    disabled={!!activeCycle}
    type="button"
    onClick={handleIncrement}
   >
    <Plus size={16}/>
   </PlusButton>
  </MinutesAmountContainer>
  <span>minutes.</span>
 </FormContainer>
 )
}