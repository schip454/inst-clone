import { Link } from "react-router-dom";
import UserBadge from "../UserBadge/UserBadge";
import "./style.css";

const Navbar = ({ nickName, avatarUrl, id }) => {
  return (
    <nav className="cnNavbarRoot">
      <div className="cnNavbarWrapper">
        <Link to="/" className="cnNavbarLink">
          Rugram
        </Link>
        <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
      </div>
    </nav>
  );
};

export default Navbar;
