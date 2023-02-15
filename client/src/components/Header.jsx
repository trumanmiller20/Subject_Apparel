import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar">
      <h1>SUBJECT</h1>
      <div className="navlinks">
        <NavLink to="/" className="navlink">
          HOME
        </NavLink>
        <NavLink to="/order" className="navlink">
          ORDER
        </NavLink>
      </div>
    </nav>
  )
}

export default Header
