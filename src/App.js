import "./App.css";
import Topbar from "./components/Topbar";
import LogInPage from "./components/LogInPage";
import Signup_P from "./components/Signup_P";
import Signup_D from './components/Signup_D';
import Footer from './components/footer';
import Home from "./components/home";
import Form from "./components/appointmentform";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
      <Topbar />
      { <Switch>
          <Route path="/loginpage" exact component={LogInPage} />
          <Route path="/Signup_D" exact component={Signup_D } />
          <Route path="/Signup_P" exact component={Signup_P} />
          {/* <Route path="/Appointment" exact component={Appointment} /> */}
          <Route path="/" exact component={Home} />
          <Route path="/appointmentform" exact component={Form}  />
        </Switch> }
        
      </Router>
      <Footer />
    </div>
  );
}

export default App;
