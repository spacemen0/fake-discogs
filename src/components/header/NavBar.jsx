import { useState } from "react";
import ProfileDropdownMenu from "./ProfileDropdownMenu";

function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    const response = await fetch("http://localhost:1111/api/v1/user-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "sample2",
        email: "example2@mail.com",
        password: "12dsa34dsa567890",
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setLoggedIn(true);
    }
  };
  const handleLogout = () => {
    setLoggedIn(false);
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
            <ProfileDropdownMenu onLogoutClick={handleLogout} />
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </li>

        {!loggedIn && (
          <li>
            <button>Register</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
