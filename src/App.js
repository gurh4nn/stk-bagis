import './sass/App.scss';
import { Route } from 'react-router';
import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"
import Home from "./Components/Home"
import Corporation from "./Components/Corporation/Index"
// import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Header />
    <switch>
      <Route>
        <Route exact path="/" component={Home} />
        <Route exact path="/kurumsal" component={Corporation} />
      </Route>
    </switch>
     <Footer />
    </div>
  );
}

export default App;
