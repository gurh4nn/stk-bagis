import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './Store/Store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import Register from "./Auth/Register";
// import Login from "./Auth/Login";
import { ReactReduxFirebaseProvider} from "react-redux-firebase";
import firebase from "./Config/Firebase";
// import {setCurrentUser} from "./Auth/authSlice"
// import AddDonate from "./Components/User/AddDonate"
// import Donate from "./Components/Donate/Index"

const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
    enableLoggin: false,
  },
  dispatch: Store.dispatch,
};

// const Root = ({history}) => {
//   const dispatch = useDispatch();
//   const currentUser = useSelector ( (state) => state.auth);

//   useEffect(()=>{

//     firebase.auth().onAuthStateChanged((user) => {

//       if(user){

//         dispatch(setCurrentUser(user));
//       } else {
//         history.push('/login');
//       }
//     });
//   },[]);
//   return (



//       <Switch>
//         <Route exact path="/" component={App} />
//         <Route path="/login" component={Login} />
//         <Route path="/register" component={Register} />
//         <Route path="/kampanya-ekle" component={AddDonate} />
//         <Route path="/bagis" component={Donate} />
//       </Switch>

//   )


// }

// const RootA = withRouter(Root);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <App/>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();





















// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// // import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Firebase from "./Config/Firebase";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   ReactReduxFirebaseprovider,
//   firebaseReducer,
// } from "react-redux-firebase";
// import Store from "./Store/Store";
// import { Provider } from "react-redux";

// import "firebase/auth";
// import "firebase/firestore";
// import Register from "./Auth/Register";
// // import Login from "./Auth/Login"

// const rrfProps = {
//   Firebase,
//   config: {
//     userProfile: "users",
//     enableLoggin: false,
//   },
//   dispatch: Store.dispatch,
// };

// const Root = () => {
//   const dispatch = useDispatch();
//   return <div>
//     <Router>
//       <Switch>
//         <Route exact path="/" component={App} />
//         {/* <Route path="/login" component={Login} /> */}
//         <Route path="/register" component={Register} />
//       </Switch>
//     </Router>
//   </div>;
// };

// export default Root;

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={Store}>
//       <ReactReduxFirebaseprovider {...rrfProps}>
//         <Router>
//           <Root />
//         </Router>
//       </ReactReduxFirebaseprovider>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
