// Importing Navlink and Outlet from React-Router-Dom
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
      <div className="navigation">
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <div className="bar">
               <NavLink activeclassName="links" to="/" >
                            Home</NavLink>
            </div>
            <div className="bar">
               <NavLink activeclassName="links" to="/about">
                            About</NavLink>
            </div>  
            <div className="bar">
               <NavLink  activeclassName="links" to="/projects">Projects</NavLink>
            </div>
            <div className="bar">
               <NavLink activeclassName="links"  to="/contact" >Contact</NavLink>
            </div>
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </div>
    );
  }
  