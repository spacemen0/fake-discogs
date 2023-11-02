import Header from "./components/header/Header";
import Container from "./components/container/Container";
import { RecordsProvider } from "./contexts/RecordsContext";
function App() {
  return (
    <div className="App">
      <RecordsProvider>
        <Header />
        <Container />
      </RecordsProvider>
    </div>
  );
}

export default App;
