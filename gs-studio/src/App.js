import Navbar from "./components/navbar"
import Home from "./components/home"
import About from "./components/about"
import Services from "./components/services"
import Contact from "./components/contact"
import Footer from "./components/footer"
import { Route, Switch } from "react-router-dom";
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
