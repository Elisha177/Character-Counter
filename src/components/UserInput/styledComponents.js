import styled from 'styled-components'

export const UserInputItem = styled.li`
  list-style-type: none;
`

export const UserEnteredDetails = styled.p`
  color: #0f172a;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Roboto';
`
export const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #ff1a1a;
  }
`
