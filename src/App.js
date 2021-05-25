import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';


function App() {
  return (
    <Router>
     <Switch>
       <Route exact  path="/">
      <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route>
         
       </Route>
       <Route>
         
       </Route>
       <Route>
         
       </Route>
     </Switch>
    </Router>
  );
}

export default App;
