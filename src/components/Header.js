import React from "react";
import "./Header.css";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { withStyles } from "@material-ui/styles";

const HeaderButton = withStyles({
  root: {
    textDecoration: "none",
    textTransform: "none",
    fontWeight: 700,
    paddingLeft: 20,
    paddingRight: 20,
  },
})(Button);

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
      <Link to="/">
        <img
          className="header_logo"
          alt="logo"
          src={process.env.PUBLIC_URL + "/images/ampd-logo.png"}
        />
      </Link>

      <div className="header_right">
        <HeaderButton variant="text" onClick={() => navigate("/findaspace")}>
          Find a Space
        </HeaderButton>
        <HeaderButton variant="text">Bookings</HeaderButton>
        <HeaderButton variant="text">Manage space(s)</HeaderButton> |{" "}
        <div className="language">
          <LanguageIcon />
          <ExpandMoreIcon />
        </div>
        {/* once the profile page is created this should go there if a user is logged in */}
        <Link to="/signin">
          <Avatar src={user ? user.profile_image : undefined} />
        </Link>
        {user && <HeaderButton onClick={signOut}>Sign Out</HeaderButton>}
      </div>
    </div>
  );
}
export default Header;
