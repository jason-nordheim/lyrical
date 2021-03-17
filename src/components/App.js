import Navbar from "./layout/NavBar";
import Index from "./layout/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "../context";

const App = () => {
  return (
    <Provider>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route to="/" exact>
              <Index />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
