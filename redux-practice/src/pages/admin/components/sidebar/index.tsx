import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import Logo from "@components/logo";
import UserPanel from "@components/user-panel";

export default function SideBar() {
  return (
    <div className="sidebar" data-testid="sidebar">
      <div>
        <Logo href="/admin" />
        <ul>
          <li className="sidebar__add">
            <a className="sidebar__add-link" href="/add-question">
              <FontAwesomeIcon icon={faCirclePlus} />
              <span className="sidebar__add-text">Add question</span>
            </a>
          </li>
        </ul>
      </div>
      <UserPanel username="Trang Nguyen" className="sidebar__user-panel" />
    </div>

  );
}
