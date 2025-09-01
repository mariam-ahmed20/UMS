import UserInfo from '../UserInfo/UserInfo'
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import type { Users } from "../Inteerface"


const AddUser = () => {
  const navigate = useNavigate()

  const handleAdd = async (data: Users) => {
    try {
       let response = await axios.post("https:dummyjson.com/users/add", data)
       console.log(response)
       toast.success("new user added")
       navigate('/dashboard')
      } 
     catch (error) {
       toast.error("sorry adding failed!")
       console.log(error)
     }
  }
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
    onSubmit={handleAdd}   
    />
  )
}

export default AddUser