import { useState } from "react";
import ProfileDropdownMenu from "./ProfileDropdownMenu";
import LoginForm from "./LoginForm";
import { useLoggedInContext } from "../../contexts/LoggedinContest";

function NavBar() {
  const { loggedIn, updateLoggedIn } = useLoggedInContext();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [logged, setLogged] = useState(false);

  const handleLogin = async (event, username, email, password) => {
    event.preventDefault();
    console.log("Login form submitted");
    console.log(username, email, password);
    const response = await fetch("http://localhost:1111/api/v1/user-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      updateLoggedIn(true);
      setShowLoginForm(false);
    }
    setLogged(true);
    console.log(logged);
  };
  const handleLogout = () => {
    updateLoggedIn(false);
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <button href="#">Messages</button>
          </li>
          <li>
            <button href="#">Cart</button>
          </li>
          <li>
            {logged ? (
              <ProfileDropdownMenu onLogoutClick={handleLogout} />
            ) : (
              <button
                onClick={() => {
                  setShowLoginForm(true);
                }}
              >
                Login
              </button>
            )}
          </li>

          {!logged && (
            <li>
              <button>Register</button>
            </li>
          )}
        </ul>
      </nav>
      {showLoginForm && <LoginForm handleSubmit={handleLogin} />}
    </>
  );
}

export default NavBar;
