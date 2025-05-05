import { Play } from 'phosphor-react'

import { HomeContainer, FormContainer, CountdownContiner, Separator, StartCountdownButton, TaskInput, MinutesAmountInput } from './styles'

export function Home() {
 return(
  <HomeContainer>
   <form action="">
    <FormContainer>
     <label htmlFor="task">Vou trabalhar em</label>
     <TaskInput id="task" placeholder='Dê um nome ao seu projeto'/>

     <label htmlFor="minutesAmount">durante</label>
     <MinutesAmountInput type="number" id="minutesAmount" placeholder='00'/>

     <span>minutes.</span>
    </FormContainer>

    <CountdownContiner>
     <span>0</span>
     <span>0</span>
     <Separator>:</Separator>
     <span>0</span>
     <span>0</span>
    </CountdownContiner>

    <StartCountdownButton type="submit">
     <Play size={24}/>
     Começar
     </StartCountdownButton>
   </form>
  </HomeContainer>
 )
}