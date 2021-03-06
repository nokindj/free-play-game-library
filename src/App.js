import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import GamesList from "./Components/GamesList";
import GameDetails from "./Components/GameDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={GamesList} />
        <Route path="/game-details/:id" component={GameDetails} />
      </Switch>
    </div>
  );
}

export default App;
