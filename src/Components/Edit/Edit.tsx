import { useEffect, useState } from "react"
import UserInfo from "../UserInfo/UserInfo"
import type { User, Users } from "../Inteerface"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Edit = () => {  
  const {id} = useParams()
  const navigate = useNavigate()
  let [user , setUser] = useState<User | null>(null)
  let handleEdit = async (data: Users) => {
    try {
      let response = await axios.put(`https://dummyjson.com/users/${id}`, data)
      console.log(response)
      toast.success("user edited")
      navigate('/dashboard')
      
    } catch (error) {
      toast.error("editing failed")
      console.log(error)
    }
  }

  useEffect (() => {
    const fetchUser = async () => {
       try {
         let response = await axios.get(`https:dummyjson.com/users/${id}`)
         setUser(response.data)
       } catch (error) {
         console.log(error)
       }
     }
    if (id)
    fetchUser()
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
    onSubmit={handleEdit}
    />
    
  )
}

export default Edit