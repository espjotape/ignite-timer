import styled from "styled-components";

export const HistoryContainer = styled.main`
 flex: 1;
 padding: 2.5rem;
 display: flex;
 flex-direction: column;

 h1 {
  font-size: 1.5rem;
  color: ${(props) => props.theme['gray-100']};
 }

 ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['gray-500']}; 
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme['gray-800']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  margin-top: 2rem;
  max-height: calc(100vh - 25rem); 
  overflow-y: auto; 
  padding-right: 1rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      padding: 1rem;
      background-color: ${(props) => props.theme['gray-600']};
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }

`;

const STATUS_COLOR = {
 yellow: 'yellow-500',
 green: 'green-500',
 red: 'red-500',
} as const

interface StatusProps {
 statusColor: keyof typeof STATUS_COLOR
}

export const Status = styled.span<StatusProps>`
 display: flex;
 align-items: center;
 gap: 0.5rem;

 &::before {
  content: '';
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]}
 }
`