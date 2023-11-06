import Header from "./components/header/Header";
import Container from "./components/container/Container";
import { RecordsProvider } from "./contexts/RecordsContext";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RecordsProvider>
          <Header />
          <Container />
        </RecordsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
