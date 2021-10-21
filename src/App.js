import "./App.css";
import Topbar from "./components/Topbar";
import LogInPage from "./components/LogInPage";
// gdhjb
//Vijeta Singh Yadav
function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="app__page">
        <LogInPage />
      </div>
    </div>
  );
}

export default App;
