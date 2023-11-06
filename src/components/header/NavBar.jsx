import { useState } from "react";
import ProfileDropdownMenu from "./ProfileDropdownMenu";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useAuthContext } from "../../contexts/AuthContext";

function NavBar() {
  const { LoggedIn, updateLoggedIn } = useAuthContext();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLogin = async (event, username, email, password, option) => {
    event.preventDefault();
    console.log("Login form submitted");
    const url =
      option === "username"
        ? "http://localhost:1111/api/v1/user-login/username"
        : "http://localhost:1111/api/v1/user-login/email";
    const body =
      option === "username" ? { username, password } : { email, password };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      updateLoggedIn(true);
      setShowLoginForm(false);
    }
  };
  const handleRegister = async (event, username, email, password) => {
    event.preventDefault();
    window.alert("Register form submitted");
    console.log("Register form submitted");
    const response = await fetch("http://localhost:1111/api/v1/user-register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    if (response.status === 201) {
      const data = await response.json();
      console.log(data);
      setShowRegisterForm(false);
    }
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
            {LoggedIn ? (
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

          {!LoggedIn && (
            <li>
              <button
                onClick={() => {
                  setShowRegisterForm(true);
                }}
              >
                Register
              </button>
            </li>
          )}
        </ul>
      </nav>
      {showLoginForm && <LoginForm handleSubmit={handleLogin} />}
      {showRegisterForm && <RegisterForm handleSubmit={handleRegister} />}
    </>
  );
}

export default NavBar;
