import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

function ProfileDropdownMenu({ onLogoutClick, onDeleteAccount }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const { userInfo } = useAuthContext();
  return (
    <div className="profile-dropdown-menu">
      <button href="#" onClick={() => setShowDropdown(!showDropdown)}>
        Profile{userInfo && `: ${userInfo.username}`}
      </button>
      {showDropdown && (
        <ul>
          <li>
            <button>Settings</button>
          </li>
          <li>
            <button onClick={() => onLogoutClick()}>Logout</button>
          </li>
          <li>
            <button onClick={()=> onDeleteAccount()}>Delete Account</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileDropdownMenu;
