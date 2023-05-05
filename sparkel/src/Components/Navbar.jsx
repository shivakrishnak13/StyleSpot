import { Box } from "@chakra-ui/react";
import React, { memo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiUsers } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { SlMenu } from "react-icons/sl";
import styles from "../CSS/navbar.module.css";
import logo from "../images/StyleSpot editted.png";

const Navbar = () => {
  const [act, setect] = useState(false);
  const navigate = useNavigate();
  const showOptions = () => {
    setect(!act);
  };

  return (
    <div>
      <div className={styles.navbar_main}>
        <Box className="logo-title">
          <img src={logo} alt="logo" className={styles.logo} />
        </Box>

        <Box className={styles.nav_links}>
          <a href={"#"}>Home</a>
          <a href={"#"}>About</a>
          <a href={"#"}>Collection</a>
          <a href={"#"}>Blog</a>
          <a href={"#"}>Fashion</a>
        </Box>

        <div className={styles.nav_icons}>
          <FiSearch  />
          <FiUsers onClick={()=>navigate("/login")}/>
          <span className={styles.cart}>Cart(0)</span>
        </div>

        <div className={`${styles.menu_bar}`} id="hello">
          <FiSearch />
          {act ? (
            <GrClose onClick={showOptions} />
          ) : (
            <SlMenu onClick={showOptions} />
          )}
        </div>
      </div>

      <div
        className={act ? `${styles.drop_down_active}` : `${styles.drop_down}`}
      >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Collection</li>
          <li>Blog</li>
          <li>Fashion</li>
        </ul>
      </div>
    </div>
  );
};

export default memo(Navbar);
