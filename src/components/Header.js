import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";


  function Header() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const signOut = () => {

    console.log("SignOut");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/signin");
    };

    return (
      <div className="header">
        <Link to="/home">
        <img
          className="header_logo"
          alt="logo"
          src={process.env.PUBLIC_URL + "/images/ampd-logo.png"}
          />
      </Link>

      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header_right">
        <div>
          <LanguageIcon />
          <ExpandMoreIcon />
        </div>
        {/* once the profile page is created this should go there if a user is logged in */}
        <Link to="/signin">
          <Avatar src={user ? user.profile_image : undefined} />
        </Link>
        {user && <Button onClick={signOut}>Sign Out</Button>}
      </div>
    </div>
  );
}
export default Header;
