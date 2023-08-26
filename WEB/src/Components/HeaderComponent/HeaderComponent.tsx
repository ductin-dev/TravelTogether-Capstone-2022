import React from 'react'
import "./Header.modules.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from '../../Assets/icon-app.png';
import { faArrowUpRightFromSquare, faBell, faEarth, faHouse, faMap, faMessage, faSearch, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { PATH } from '../../Config/RouterName';
import { Dropdown } from 'react-bootstrap';

const HeaderComponent = () => {
  // navigation
  const navigation = useNavigate();

  // logout 
  const logout = () => {
    localStorage.removeItem("user");
    navigation("/login");
  }

  return (
    <header>
      <nav>
        <ul>
          <li> <a href="#" id="fb" data-tooltip="Home"> <img src={logo} alt="Logo" className='' /></a> </li>
          <li> <button id="search_btn" className="tooltips" data-tooltip="Search"> <FontAwesomeIcon icon={faSearch} /> </button></li>
          <li id="space2"></li>
          <li> <NavLink className="tooltips" data-tooltip="Home" to={PATH.HOME} id="home"> <FontAwesomeIcon icon={faHouse} /> </NavLink> </li>
          <li> <NavLink className="tooltips" data-tooltip="Explorer" to={PATH.BLOG} id="explore"> <FontAwesomeIcon icon={faEarth} />  </NavLink></li>
          <li> <NavLink className="tooltips" data-tooltip="Map" to={PATH.MAPEXPLORE} id="group"> <FontAwesomeIcon icon={faMap} />  </NavLink></li>
          <li> <NavLink className="tooltips" data-tooltip="Watch" to="{PATH.HOME}" id="tv"> <FontAwesomeIcon icon={faVideo} />  </NavLink> </li>
          <li id="space1"></li>
          <li> <button className="tooltips" data-tooltip="Add" id="btn_plus"><FontAwesomeIcon icon={faUser} /> </button> </li>
          <li> <button className="tooltips" data-tooltip="Message" id="btn_msg"><FontAwesomeIcon icon={faMessage} /> </button></li>
          <li> <button className="tooltips" data-tooltip="Notification" id="btn_bell"> <FontAwesomeIcon icon={faBell} /> </button></li>
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="btn_profile" className='tooltips'>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComponent