import { Play } from 'phosphor-react'

import { HomeContainer, FormContainer, CountdownContiner, Separator } from './styles'

export function Home() {
 return(
  <HomeContainer>
   <form action="">
    <FormContainer>
     <label htmlFor="task">Vou trabalhar em</label>
     <input id="task" />

     <label htmlFor="minutesAmount"></label>
     <input type="number" id="minutesAmount"/>

     <span>minutes.</span>
    </FormContainer>

    <CountdownContiner>
     <span>0</span>
     <span>0</span>
     <Separator>:</Separator>
     <span>0</span>
     <span>0</span>
    </CountdownContiner>

    <button type="submit">
     <Play size={24}/>
     Começar
     </button>
   </form>
  </HomeContainer>
 )
}