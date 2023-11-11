import { Routes, Route, BrowserRouter } from "react-router-dom";
import User from "./pages/user";
import Home from "./pages/home";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={Home()} />
            <Route path="/user/:username" element={User()} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
