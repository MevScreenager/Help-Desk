import React from "react";
import Dashboard from "./page/Dashboard";
import Tasks from "./page/Tasks";
import Profile from "./page/Profile";
import Messenger from "./page/Messenger";
import Registration from "./page/registration/Registration";

const Navbar = (props) => {
      const setPage = (event) => {
            switch (event.target.innerText) {
                  case 'Tasks': props.setPage(<Tasks/>)
                        break
                  case 'Messenger': props.setPage(<Messenger/>)
                        break
                  case 'Persons': props.setPage(<Tasks/>)
                        break
                  case 'Analytics': props.setPage(<Tasks/>)
                        break
                  case 'Profile': props.setPage(<Profile/>)
                        break
                  case 'Registration': props.setPage(<Registration/>)
                        break
                  
                  default:
                        props.setPage(<Dashboard/>)

            }
      }

      return (
            <nav className="navbar">
                  <ul className='navbar__lu'>
                        {props.links.map((link) =>
                              <li key={link.name}><a onClick={(e) => setPage(e)} >{link.name}</a></li>
                        )}
                  </ul>
            </nav>
      )
}

export default Navbar