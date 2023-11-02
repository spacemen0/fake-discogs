import { useState } from "react";
import ProfileDropdownMenu from "./ProfileDropdownMenu";
import Login from "./Login";
import Register from "./Register";

function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <nav>
      <ul>
        <li>
          <button href="#">Messages</button>
        </li>
        <li>
          <button href="#">Cart</button>
        </li>
        <li>
          {loggedIn ? (
            <ProfileDropdownMenu />
          ) : (
            <Login onLoginClick={handleLogin} />
          )}
        </li>

        {!loggedIn && (
          <li>
            <Register />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
