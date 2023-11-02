import { useState } from "react";

function ProfileDropdownMenu({ onLogoutClick }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="profile-dropdown-menu">
      <button href="#" onClick={() => setShowDropdown(!showDropdown)}>
        Profile
      </button>
      {showDropdown && (
        <ul>
          <li>
            <button>Settings</button>
          </li>
          <li>
            <button onClick={() => onLogoutClick()}>Logout</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileDropdownMenu;
