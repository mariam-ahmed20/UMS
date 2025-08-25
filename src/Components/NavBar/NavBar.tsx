// import img from '../../assets/Vector.png'
// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { GoBell } from "react-icons/go";
// import style from './NavBar.module.css'
// import { Link } from 'react-router-dom';



// const NavBar = () => {
//   return (
//     <>
//     <Navbar className="justify-content-between mx-4">
//     <Link to="/dashboard"><img src={img} alt="" /></Link>
//       <Form>
//         <Row>
//           <Col xs="auto">
//             <Form.Control
//               type="text"
//               placeholder="Search"
//               className=" mr-sm-2"
//             />
//           </Col>
//           <Col xs="auto">
//           <GoBell className={style.bell} size={20} />

//           </Col>
//         </Row>
//       </Form>
//     </Navbar>
//     </>
//   )
// }

// export default NavBar




import img from '../../assets/Vector.png';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoBell } from "react-icons/go";
import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { IoIosSearch } from "react-icons/io";


const NavBar = () => {
  return (
    <>
      <Navbar className="justify-content-between mx-4">
        <Link to="/dashboard"><img src={img} alt="logo" /></Link>
        <Form>
          <Row>
            <Col xs="auto">
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip>
                    🔧 Search feature isn't ready yet!
                  </Tooltip>
                }
              >
                <span className={style.search}>
                  <Form.Control
                    type="text"
                    placeholder="Search..."
                    style={{ pointerEvents: "none" }}
                  />
                  <IoIosSearch className={style.lens} />
                </span>
              </OverlayTrigger>
            </Col>
            <Col xs="auto">
              <GoBell className={style.bell} size={20} />
            </Col>
          </Row>
        </Form>
      </Navbar>
    </>
  );
};

export default NavBar;
