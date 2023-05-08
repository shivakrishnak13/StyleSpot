import { Box } from "@chakra-ui/react";
import React, { memo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiUsers } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { SlMenu } from "react-icons/sl";
import styles from "../CSS/navbar.module.css";
import logo from "../images/StyleSpot editted.png";
import { MenuButton,MenuList,MenuItem,Menu,IconButton } from '@chakra-ui/react';
import {BiHomeHeart} from "react-icons/bi";
import {FcAbout} from "react-icons/fc";
import {BsCollectionFill} from "react-icons/bs";
import {FaBlog} from "react-icons/fa";
import {GiAmpleDress} from "react-icons/gi";



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
          <FiSearch />
          <FiUsers onClick={() => navigate("/login")} />
          <span className={styles.cart}>Cart(0)</span>
        </div>

        <div className={`${styles.menu_bar}`} id="hello">
          <FiSearch />
         
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon= {act ? (
                <GrClose />
              ) : (
                <SlMenu />
              )}
              onClick={showOptions} 
              variant='none'
            />
            <MenuList>
              <MenuItem icon={<BiHomeHeart/>} >
              Home
              </MenuItem>
              <MenuItem icon={<FcAbout/>} >
              About
              </MenuItem>
              <MenuItem icon={<BsCollectionFill/>}  >
              Collection
              </MenuItem>
              <MenuItem icon={<FaBlog/>} >
              Blog
              </MenuItem>
              <MenuItem icon={<GiAmpleDress/>} >
              Fashion
              </MenuItem>
              <MenuItem icon={<FiUsers/>} >
             Login
              </MenuItem>
            </MenuList>
          </Menu>


        </div>
      </div>

    </div>
  );
};

export default memo(Navbar);
