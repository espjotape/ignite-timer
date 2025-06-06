import styled from "styled-components";

export const HomeContainer = styled.main`
 flex: 1;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;

 form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
 }
`

export const BaseCountdownButton = styled.button`
 width: 100%;
 padding: 1rem;
 border-radius: 8px;

 display: flex;
 align-items: center;
 justify-content: center;
 gap: 0.5rem;
 font-weight: bold;

 background: none;
 border: none;
 cursor: pointer;

 color: ${(props) => props.theme['gray-150']};

 &:not(:disabled):hover {
  background: ${(props) => props.theme['green-700']};
 }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
 background: ${(props) => props.theme['green-500']};

 &:disabled {
  cursor: not-allowed;
  opacity: 0.7;
 }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
 background: ${(props) => props.theme['red-500']};

 &:not(:disabled):hover {
  background: ${(props) => props.theme['red-700']};
}
`