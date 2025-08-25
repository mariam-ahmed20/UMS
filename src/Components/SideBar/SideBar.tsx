import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome , FaUsers , FaSignOutAlt , } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri"
import { FaCircleUser } from "react-icons/fa6";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


import '../../App.css'
import style from './Sidebar.module.css'
import { AuthContext } from '../../context/AuthContext';

const SideBar = () => {
  let{userData}:any = useContext(AuthContext)
  let [ collapsed , setCollapsed ] = useState(false);
  let toggleCollape = () => {
    setCollapsed(!collapsed)
  }
  const [active, setActive] = useState("Home");
  return (
    <div className={`vh-100 ${style.sidebarContainer}`}>

      <Sidebar className='vh-100' collapsed={collapsed}>
        
        
        <div className='text-center my-3'>
          <img src={userData?.image} alt="userImage" className='rounded-circle' style={{ width: "50px" }} />
          <h5>{userData?.firstName}</h5>
          <h6 className='text-warning'>Admin</h6>
        </div>


        <Menu>
          <MenuItem className={active === "Home" ? style.active : ""} onClick={() => setActive("Home")} icon={<FaHome />} component={<Link to="/dashboard" />}> Home</MenuItem>
          <MenuItem className={active === "Users" ? style.active : ""} onClick={() => setActive("Users")} icon={<FaUsers />} component={<Link to="/dashboard/userslist" />}> Users</MenuItem>
          <MenuItem className={active === "Add user" ? style.active : ""} onClick={() => setActive("Add user")} icon={<RiUserAddFill />} component={<Link to="/dashboard/adduser" />}>Add user</MenuItem>
          <MenuItem className={active === "Profile" ? style.active : ""} onClick={() => setActive("Profile")} icon={<FaCircleUser />} component={<Link to="/dashboard/profile" />}>Profile</MenuItem>
          <MenuItem className={active === "Sign Out" ? style.active : ""} onClick={() => setActive("Sign Out")} icon={<FaSignOutAlt />} component={<Link to="/dashboard/signout" />}> Sign Out</MenuItem>
        </Menu>
        
        {collapsed ? <FaArrowRight onClick={toggleCollape} className={style.arrow} /> :<FaArrowLeft onClick={toggleCollape} className={style.arrow} />}
      </Sidebar>
         
    </div>

    
  )
}

export default SideBar