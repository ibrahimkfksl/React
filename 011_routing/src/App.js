import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

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
          {/*
          NavLink ile Link arasındaki fark, navlink e style verebiliyoruz, mesela aktif olduğunda rengini değiştirme gibi, aralarındaki fark budur
          Bir style verdiğimizde, tıpkı route da olduğu gibi ana dizindeki component e exact property si verilmelidir.
          ayrıca activeClassName de kullanılabilir, bu sayede aktif olanın rengi değişir
           */}
          {/* Switch calisma mantigi, kok dizin en altta olmalidir, cunku uste alirsak tum componentler ile / ifadesi eslesir ve Home sayfasinda takili kaliriz
              ustte olmasini istiyorsan eger exact property sini eklemen gerekir <Route path="/" exact component={Home}></Route>
          */}
          <Route path="/about" component={About}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/user/:id" component={User}></Route>
          <Route path="*" component={Error404}></Route>{" "}
          {/* Error page yapmak için kullandık, eşleşme olmayan durumda buna girer */}
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
