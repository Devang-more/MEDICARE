import "./App.css";
import Topbar from "./components/Topbar";
import LogInPage from "./components/LogInPage";
import Signup_P from "./components/Signup_P";
import Signup_D from './components/Signup_D';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="app__page">
        <Signup_D />
        
      </div>
    </div>
  );
}

export default App;
