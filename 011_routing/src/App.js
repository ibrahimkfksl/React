import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* normal programlama da ki switch ile ayni

         */}
        <Switch>
          {/* ayni sey ikiside
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        */}

          {/* Switch calisma mantigi, kok dizin en altta olmalidir, cunku uste alirsak tum componentler ile / ifadesi eslesir ve Home sayfasinda takili kaliriz
              ustte olmasini istiyorsan eger exact property sini eklemen gerekir <Route path="/" exact component={Home}></Route>
          */}
          <Route path="/about" component={About}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/user/:id" component={User}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
