
import React,{useState} from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import {useHistory} from "react-router-dom";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [search,setsearch]=useState("");
  const history = useHistory();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  
  const handleSubmit = async (event)=> {
      console.log(search)
      switch(search.toLowerCase()){
        case 'rings':{
            history.push('../Sale')
        }
        case 'coin':{
            history.push('../Sale')
        }
        case 'necklace':{
            history.push('../Sale')
            
        }
        case 'pendantset':{
            history.push('../Sale')
        }
        case 'crown':{
            history.push('../Sale')
        }

      }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="logo.png"
        />
      </Link>
      
      <div className="header__search">
        <input className="header__searchInput" type="text" onChange={(event)=>setsearch(event.target.value)} />
        <  SearchIcon className="header__searchIcon" onClick={handleSubmit} />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello ,{user ? user?.email.split("@")[0]:"Guest"}</span>
             
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        {/* <Link to='http://www.spngold.in/'>
        <div className="header__option">
            <span className="header__optionLineOne">GOLD</span>
            <span className="header__optionLineTwo">RATE</span>
        </div>
        </Link> */}
        <a href="https://tradingeconomics.com/commodity/gold">
          <div className="header__option">
            <span className="header__optionLineOne">Market</span>
            <span className="header__optionLineTwo">News</span>
        </div>
        </a>
        <a href="http://www.spngold.in/">
          <div className="header__option">
            <span className="header__optionLineOne">GOLD</span>
            <span className="header__optionLineTwo">RATE</span>
        </div>
        </a>
        
        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;