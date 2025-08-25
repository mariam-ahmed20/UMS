import UserInfo from '../UserInfo/UserInfo'

const AddUser = () => {
  return (
    <UserInfo 
    title="Add User" 
    placeholderOne="enter first name"
    placeholderTwo="enter last name"
    placeholderThree="enter email"
    placeholderFour="enter age"
    placeholderFive="enter phone number"
    placeholderSix="enter birth date"
    button="Add"
    message="new user added"
    />
  )
}

export default AddUser