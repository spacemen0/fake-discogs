import Header from "./components/header/Header";
import Container from "./components/container/Container";
import { RecordsProvider } from "./contexts/RecordsContext";
import { LoggedInProvider } from "./contexts/LoggedinContest";
function App() {
  return (
    <div className="App">
      <LoggedInProvider>
        <RecordsProvider>
          <Header />
          <Container />
        </RecordsProvider>
      </LoggedInProvider>
    </div>
  );
}

export default App;
