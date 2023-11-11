import { useState } from "react";
import config from "../../config";
import ProfileDropdownMenu from "./ProfileDropdownMenu";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useAuthContext } from "../../contexts/AuthContext";

function NavBar() {
  const { isAuthenticated, login, logout } = useAuthContext();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLogin = async (event, username, email, password, option) => {
    event.preventDefault();
    const result = await login(username, email, password, option);

    if (result.success) {
      setShowLoginForm(false);
      setShowRegisterForm(false);
    } else {
      window.alert(result.error);
    }
  };
  const handleRegister = async (event, username, email, password) => {
    event.preventDefault();
    const response = await fetch(`${config.apiUrl}user-register`, {
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
    logout();
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Cart</a>
          </li>
          <li>
            {isAuthenticated ? (
              <ProfileDropdownMenu onLogoutClick={handleLogout} />
            ) : (
              <button
                onClick={() => {
                  setShowLoginForm(!showLoginForm);
                }}
              >
                Login
              </button>
            )}
          </li>

          {!isAuthenticated && (
            <li>
              <button
                onClick={() => {
                  setShowRegisterForm(!showRegisterForm);
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
