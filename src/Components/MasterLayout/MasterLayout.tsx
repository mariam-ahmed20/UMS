import SideBar from '../SideBar/SideBar'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

const MasterLayout = () => {
  return (
    <>
     <div className='main-container'>
        <div className="d-flex">
            <div>
                <SideBar />
            </div>
            <div className="w-100">
                <NavBar />
                <Outlet />
            </div>
        </div>
      </div>
    </>
  )
}

export default MasterLayout