import React from "react";
import Dashboard from "./page/Dashboard";
import Tasks from "./page/Tasks";

const Navbar = (props) => {
      const setPage = (event) => {
            switch (event.target.innerText) {
                  case 'Dashboard':
                        props.setPage(<Dashboard/>)
                        break
                  case 'Tasks': props.setPage(<Tasks/>)
                        break
            }
      }

      return (
            <nav className="navbar">
                  <ul className='navbar__lu'>
                        {props.links.map((link) =>
                              <li key={link.name}><a onClick={(e) => setPage(e)}>{link.name}</a></li>
                        )}
                  </ul>
            </nav>
      )
}

export default Navbar