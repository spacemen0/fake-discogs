import React, { useState, useEffect, useRef } from "react";
import ProfileDropdownMenu from "./ProfileDropdownMenu";

function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const profileRef = useRef(null);

  return (
    <nav>
      <ul>
        <li>
          <a href="#">Messages</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => setShowDropdown(!showDropdown)}
            ref={profileRef}
          >
            Profile
          </a>
          {showDropdown && <ProfileDropdownMenu />}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
