import axios from "axios"
import UserInfo from "../UserInfo/UserInfo"
import { useEffect, useState } from "react"
import type { User } from "../Inteerface"


const Profile = () => {
  let [user , setUser] = useState<User | null>(null)
  let showProfile = async() => {
    try {
      const token = localStorage.getItem("userToken")
      let response = await axios.get('https://dummyjson.com/user/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }})
      console.log(response?.data)
      
      setUser(response?.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect (() => {
    showProfile();
  },[])

  return (
    <UserInfo
    title="Profile" 
    showImg ={true}
    src={user?.image}
    showButton = {false}
    readOnly = {true}
    valueOne={user?.firstName}
    valueTwo={user?.lastName}
    valueThree={user?.email}
    valueFour={user?.age}
    valueFive={user?.phone}
    valueSix={user?.birthDate}
    />
  )
}

export default Profile