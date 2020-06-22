import React from "react";
import Header from "../UI/Header/Header";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";

import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div>
      <Header></Header>
      {props.children}
      <Fab
        color="primary"
        variant="extended"
        aria-label="like"
        className={classes.GithubStarButton}
        href="https://github.com/RaihanStark/freelancer_tools"
      >
        <FavoriteIcon />
        +1 Star on Github
      </Fab>
    </div>
  );
};
export default Layout;
