import './sass/App.scss';
import { Switch, Route } from 'react-router-dom';
import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"
import Home from "./Components/Home"
import Corporation from "./Components/Corporation/Index"
import User from "./Components/User/Index"
import Donate from "./Components/Donate/Index"
import Dashboard from "./Components/User/Dashboard"
import BankAccount from "./Components/Corporation/BankAccounts"
import Contact from "./Components/Corporation/Contact"

function App() {
  return (
    <div className="App">
     <Header />
    <Switch>
      <Route>
        <Route exact path="/" component={Home} />
        <Route exact path="/kurumsal" component={Corporation} />
        <Route exact path="/kullanici" component={User} />
        <Route exact path="/bagis" component={Donate} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/hesap-numaralari" component={BankAccount} />
        <Route exact path="/iletisim" component={Contact} />
      </Route>
    </Switch>
     <Footer />
    </div>
  );
}

export default App;
