import { getFirstLettersBySpace } from "@helpers/string";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import Menu from "./Menu";
import "./styles.css";

export interface UserPanelProps {

  username?: string;
  className?: string;
}

export default function UserPanel({
  username,
  className,
}: UserPanelProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // Handle loading for fetching username here

  return (
    <div className={className ? `user-panel ${className}` : "user-panel"}>
      <div
        className="user-panel__avt-group"
        data-testid="user-panel"
      >
        { username && (
          <Button
            data-testid="user-panel-btn"
            onClick={handleOpenMenu}
            className="user-panel__btn"
            colorScheme="white"
            variant="ghost"
          >
            <div className="user-panel__avatar">
              <span>{getFirstLettersBySpace(username)}</span>
            </div>
            <span
              className="user-panel__username"
              data-testid="username"
            >
              {username}
            </span>
          </Button>
        )}
      </div>
      {isOpenMenu && (
        <Menu />
      )}
    </div>
  );
}
