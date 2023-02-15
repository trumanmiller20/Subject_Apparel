import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar">
      <h3>SUBJECT</h3>
      <div>
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
