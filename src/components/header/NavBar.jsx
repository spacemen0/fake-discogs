import { useState } from "react";
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
    } else {
      window.alert(result.error);
    }
  };
  const handleRegister = async (event, username, email, password) => {
    event.preventDefault();
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
    logout();
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
            {isAuthenticated ? (
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

          {isAuthenticated && (
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
