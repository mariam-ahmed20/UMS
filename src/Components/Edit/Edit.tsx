import { useEffect, useState } from "react"
import UserInfo from "../UserInfo/UserInfo"
import type { User } from "../Inteerface"
import axios from "axios"
import { useParams } from "react-router-dom"

const Edit = () => {  
  const {id} = useParams()
  let [user , setUser] = useState<User | null>(null)
  let showProfile = async() => {
    try {
      let response = await axios.put(`https://dummyjson.com/users/${id}`)
      console.log(response?.data)
      setUser(response?.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect (() => {
    if (id)
    showProfile();
  },[id])
  return (
    <UserInfo  
    title="Edit Profile"
    button="Save Edits"
    valueOne={user?.firstName}
    valueTwo={user?.lastName}
    valueThree={user?.email}
    valueFour={user?.age}
    valueFive={user?.phone}
    valueSix={user?.birthDate}
    message="user edited"
    />
  )
}

export default Edit