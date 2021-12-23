import "./App.css";
import Topbar from "./components/Topbar";
import LogInPage from "./components/LogInPage";
import VideoConsult from "./components/VideoConsult";
import Signup_P from "./components/Signup_P";
import Signup_D from './components/Signup_D';
import Footer from './components/footer';
import Doctors from "./components/Doctors";
import Home from "./components/home";
import Form from "./components/appointmentform";
import Selection from "./components/doctorselection"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
      <Topbar />
      { <Switch>
          <Route path="/loginpage" exact component={LogInPage} />
          <Route path="/doctors" exact component={Doctors} />
          <Route path="/Signup_D" exact component={Signup_D } />
          <Route path="/Signup_P" exact component={Signup_P} />
          <Route path="/VideoConsult" exact component={VideoConsult} />

          {/* <Route path="/Appointment" exact component={Appointment} /> */}
          <Route path="/" exact component={Home} />
          <Route path="/doctorselection" exact component={Selection} />
          <Route path="/appointmentform" exact component={Form}  />
        </Switch> }
<<<<<<< HEAD
        
      </Router>
      <Footer />
=======
       
      </Router>
      <Footer/>
>>>>>>> 137939cec4e3ad8ae5d39fa891941ae2b8993f2c
    </div>
  );
}

export default App;
