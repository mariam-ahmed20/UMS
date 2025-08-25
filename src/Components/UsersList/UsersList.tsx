import axios from "axios"
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import type { User } from '../Inteerface'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";




const UsersList = () => {
  let [users, setUsers] = useState<User[]>([]);
  let [userId , setUserID] = useState<number | null>(null);
  let [userData , setUserData] = useState<User | null>(null);

  const [show, setShow] = useState(false);
  let navigate =useNavigate()

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 7;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleClose = () => setShow(false);
  const handleShow = (user:User) => {
    setShow(true);
    setUserID(user.id)
    setUserData(user)
  }

  let deleteUser = async() => {
    try {
      await axios.delete(`https://dummyjson.com/users/${userId}`)
      handleClose()
      toast.success("user deleted successfully");
      getData();
    } 
    catch (error) {
      console.log(error) 
      toast.error("sorry deleting user failed");

    }
  }

  let getData = async () => {
    try {
      let response = await axios.get('https://dummyjson.com/users')
      setUsers(response?.data?.users || ([]))

    } catch (error) {
      console.log(error)

    }
  }


  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Users List</h1>
        <Link to="../adduser">
          <button className="btn btn-warning text-white">add new user</button>
        </Link>
      </div>
      <hr />
      <div className="scroll">

        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Profile</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Bith Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td data-label="#"> {user.id} </td>
                <td data-label="Profile">
                  <img src={user.image} alt="user" width="50" />
                </td>
                <td data-label="First Name">{user.firstName}</td>
                <td data-label="Last Name">{user.lastName}</td>
                <td data-label="Email">{user.email}</td>
                <td data-label="Phone">{user.phone}</td>
                <td data-label="Birth Date">{user.birthDate}</td>
                <td data-label="Actions">
                  <CiEdit onClick={() => {navigate(`../edit/${user.id}`)}} size={30} className="text-warning"/>
                  <MdDeleteOutline onClick={() => handleShow(user)} size={30} className="text-danger"/>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>


        <div className="d-flex justify-content-center mt-3 my-4">
          <Button 
            variant="secondary" 
            disabled={currentPage === 1} 
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            Prev
          </Button>

          {[...Array(totalPages)].map((_, i) => (
            <Button 
              key={i} 
              className="mx-1" 
              variant={currentPage === i+1 ? "primary" : "outline-primary"} 
              onClick={() => setCurrentPage(i+1)}
            >
              {i+1}
            </Button>
          ))}

          <Button 
            variant="secondary" 
            disabled={currentPage === totalPages} 
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            Next
          </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm deleting</Modal.Title>
          </Modal.Header>
          <Modal.Body>are you sure you want to delete {userData?.firstName} {userData?.lastName}!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={deleteUser}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </div>
  )
}

export default UsersList