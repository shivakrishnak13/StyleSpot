import React from 'react';
import styles from "../CSS/homepage.module.css"
import pcbanner from "../images/pc banner.png";
import mobilebanner from "../images/Mobile banner.png"
import Navbar from '../Components/Navbar';

const HomePage = () => {




  return (
    <div>
      <Navbar />
      <div className={styles.banner_div}>
        <img src={pcbanner} alt="banner" className={styles.pc_banner} />
        <img src={mobilebanner} alt="banner" className={styles.mobile_banner} />
      </div>
    </div>
  )
}

export default HomePage