import React, { useEffect } from "react";
import './App.css';
import Checkout from "./Checkout";
import Header from './Header';
import Home from "./Home";
import {BrowserRouter as Router,Switch,Route}
from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from './Payment';
function App() {
  const[{},dispatch] = useStateValue();
  useEffect(() => {
    //will only runs when app comp runs

    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>',authUser);
      if (authUser){
        //the user just logged in
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }
      else{
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user:null
        })

      }
    })
  },[])
  return (
    //BEM
    <Router>
    <div className="App">
    
      <Switch>
        <Route path ="/login">
          <Login />
          <h1>login page</h1>
        </Route>
        <Route path="/checkout">
            <Header />
            <Checkout />
        </Route>
        <Route path="/payment">
            <Header />
            <Payment />
        </Route>
        <Route path="/">
            <Header />
          <Home/>

        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
