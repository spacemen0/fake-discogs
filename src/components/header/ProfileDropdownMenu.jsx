import { useState } from "react";

function ProfileDropdownMenu() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="profile-dropdown-menu">
      <button href="#" onClick={() => setShowDropdown(!showDropdown)}>
        Profile
      </button>
      {showDropdown && (
        <ul>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
}

export default ProfileDropdownMenu;
