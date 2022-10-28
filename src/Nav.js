import "./Styles/Nav.css";
import { NavLink, Link } from "react-router-dom";
import Logo from './Images/logo.svg'

function Nav() {
    const pink= 'hsl(322,100%,66%)';
    return (
        <div className="nav">
            <img src={Logo} alt='logo' className="logo" />
            <div className="links">
             <NavLink className='link' to="/" style={({isActive}) => isActive ? {color: pink} : {color: 'black'} }>Home </NavLink>
             <NavLink className='link' to="/support" style={({isActive}) => isActive ? {color: pink} : {color: 'black'} }>Support </NavLink>
             <NavLink className='link' to="/users" style={({isActive}) => isActive ? {color: pink} : {color: 'black'} }>Top Users</NavLink>
            </div>
        </div>
    )
}

export default Nav;