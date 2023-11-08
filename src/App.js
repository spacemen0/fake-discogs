import Header from "./components/header/Header";
import Container from "./components/container/Container";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Container />
      </AuthProvider>
    </div>
  );
}

export default App;
