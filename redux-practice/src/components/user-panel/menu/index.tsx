import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

export default function Menu() {
  return (
    <ul className="user-panel__menu" data-testid="user-panel__menu">
      <li className="user-panel__menu-item user-panel__menu-item--profile">Profile</li>
      <li className="user-panel__menu-item user-panel__menu-item--logout">
        <span>Logout</span>
        <FontAwesomeIcon icon={faSignOut} className="user-panel__logout-icon" />
      </li>
    </ul>
  );
}
