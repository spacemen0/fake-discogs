import Header from "../components/header/Header";
import { AuthProvider } from "../contexts/AuthContext";
function User() {
  return (
    <div>
      <AuthProvider>
        <Header />
      </AuthProvider>
    </div>
  );
}

export default User;
