import { Routes, Route, BrowserRouter } from "react-router-dom";
import User from "./pages/user";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Record from "./pages/record";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:username" element={<User />} />
            <Route path="/cart/:username" element={<Cart />} />
            <Route path="/record/:record_id" element={<Record />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
