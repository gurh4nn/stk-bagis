import './sass/App.scss';
import { Switch, Route } from 'react-router-dom';
import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"
import Home from "./Components/Home"
import Corporation from "./Components/Corporation/Index"
import Donate from "./Components/Donate/Index"
import BankAccount from "./Components/Corporation/BankAccounts"
import Contact from "./Components/Corporation/Contact"
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import DashboardIndex from "./Components/User/Index"

function App() {
  return (
    <div className="App">
     <Header />
    <Switch>
      <Route>
        <Route exact path="/" component={Home} />
        <Route exact path="/kurumsal" component={Corporation} />
        <Route exact path="/bagis" component={Donate} />
        <Route exact path="/hesap-numaralari" component={BankAccount} />
        <Route exact path="/iletisim" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/kampanya-ekle" component={Register} />
        <Route exact path="/panel" component={DashboardIndex} />
      </Route>
    </Switch>
     <Footer />
    </div>
  );
}

export default App;
