import Navbar from "./layout/NavBar";
import Index from "./layout/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
