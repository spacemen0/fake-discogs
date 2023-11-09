import { Routes, Route, BrowserRouter } from "react-router-dom";
import User from "./pages/user";
import Home from "./pages/home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
