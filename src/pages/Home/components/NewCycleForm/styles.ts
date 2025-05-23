import { styled } from "styled-components"

export const FormContainer = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 0.5rem;
 flex-wrap: wrap;
 font-size: 1.125rem;
 font-weight: bold;
 color: ${(props) => props.theme['gray-100']};
`

const BaseInput = styled.input`
 background: transparent;
 height: 2.5rem;
 border: 0;
 border-bottom: 2px solid ${(props) => props.theme['gray-500']};
 font-weight: bold;
 font-size: 1.125rem;
 padding: 0 0.5rem;
 color: ${(props) => props.theme['gray-100']};

 &::placeholder {
  color: ${(props) => props.theme['gray-500']};
 }

 &:focus {
  box-shadow: none;
  border-color: ${(props) => props.theme['green-500']};
 }
`

export const TaskInput = styled(BaseInput)`
 flex: 1;

 &::-webkit-calendar-picker-indicator {
  display: none !important;
 }
`

export const MinutesAmountContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 0.5rem;
 position: relative;
`

export const MinutesAmountInput = styled(BaseInput)`
 width: 4rem;
 text-align: center;

 &::-webkit-inner-spin-button,
 &::-webkit-outer-spin-button {
   -webkit-appearance: none;
  }
`

const BaseInputButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme["gray-500"]};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover:disabled {
   cursor: not-allowed;
  }

  &:focus {
   outline: none; 
   box-shadow: none;
  }

`;

export const MinusButton = styled(BaseInputButton)`
 position: absolute;
 left: 0;
 `

export const PlusButton = styled(BaseInputButton)`
 position: absolute;
 right: 0;
 `