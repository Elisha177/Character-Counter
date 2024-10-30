import {
  UserInputItem,
  UserEnteredDetails,
  DeleteButton,
} from './styledComponents'

const UserInput = props => {
  const {userInputDetails, onDelete} = props
  const {userEnteredText, textLength} = userInputDetails

  return (
    <UserInputItem>
      <UserEnteredDetails>
        {userEnteredText} : {textLength}
      </UserEnteredDetails>
      <DeleteButton onClick={onDelete} />
    </UserInputItem>
  )
}

export default UserInput
