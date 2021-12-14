import "./App.css";
import Topbar from "./components/Topbar";
import LogInPage from "./components/LogInPage";
import Signup_P from "./components/Signup_P";
import Signup_D from './components/Signup_D';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
      <Topbar />
      <Switch>
          <Route path="/loginpage" exact component={LogInPage} />
          <Route path="/" exact component={Signup_D } />
          <Route path="/Signup_P" exact component={Signup_P} />
          {/* <Route path="/about" exact component={About} /> */}
          {/* <Route path="/contact" exact component={Contact} /> */}
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
