import { Button } from "../../components/Button/Button";
import "./Header.scss";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="Header">
      <div className="Header__nav">
        <NavLink to="/" className="Header__nav-item">
          Home
        </NavLink>
        <NavLink to="/favorites" className="Header__nav-item">
          Favorites
        </NavLink>
      </div>
      <Button />
    </div>
  );
}
