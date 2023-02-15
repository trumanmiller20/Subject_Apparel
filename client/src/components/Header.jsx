import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar">
      <h3>SUBJECT</h3>
      <div>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/order">ORDER</NavLink>
      </div>
    </nav>
  )
}

export default Header
