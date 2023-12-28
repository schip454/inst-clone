import UserBadge from "../UserBadge/UserBadge";
import "./style.css";

const Navbar = ({ nickName, avatarUrl, id }) => {
  return (
    <nav className="cnNavbarRoot">
      <div className="cnNavbarWrapper">
        <span>Rugram</span>
        <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
      </div>
    </nav>
  );
};

export default Navbar;
