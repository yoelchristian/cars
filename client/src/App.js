import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Header />
      <Body/>
      <Footer />
      <Switch>
        {/* <Route exact path="/" component={Books} /> */}
        {/* <Route exact path="/books" component={Books} /> */}
        {/* <Route exact path="/books/:id" component={Detail} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
