import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
 import Login from "./components/Login.js";
 import Register from "./components/Register.js";
import Home from "./components/Home.js";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
