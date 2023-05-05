import React from 'react';
import styles from "../CSS/homepage.module.css"
import pcbanner from "../images/pc banner.png";
import kids from "../images/kids.png";
import mens from "../images/mens cat.png";
import womnes from "../images/womens cat.png";
import latest from "../images/latest cat.png";
import jacket from "../images/jacket cat.png";
import formal from "../images/formal cat.png";
import workwear from "../images/formal cat.png";
import jeans from "../images/jeans cat.png";
import casual from "../images/casual wear.png";
import sesonal from "../images/seasonal cat.png";
import sports from "../images/sportswear cat.png";
import logo from "../images/only logo h.png"
import mobilebanner from "../images/Mobile banner.png"
import Navbar from '../Components/Navbar';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import "../index.css";

const HomePage = () => {




  return (
    <div>
      <Navbar />
      <div className={styles.Main_div}>
        <img src={pcbanner} alt="banner" className={styles.pc_banner} />
        <img src={mobilebanner} alt="banner" className={styles.mobile_banner} />










      </div>



      <div className={styles.categories}>
<Swiper
breakpoints={
  {
    100:{
      slidesPerView: 2,
      spaceBetween: 0,
    },
    500:{
      slidesPerView:4,
      spaceBetween:10
    },
    768:{
      slidesPerView:5,
      spaceBetween:20
    },
    1024:{
      slidesPerView:7,
      spaceBetween:20
    }
  }
}
>
  <SwiperSlide>
  <div className={styles.categories_options}>
          <img src={kids} alt="kids" />
          <p>Kids Hub</p>
          <p>2023</p>
        </div>
  </SwiperSlide>
  <SwiperSlide> 
        <div className={styles.categories_options}>
          <img src={mens} alt="kids" />
          <p>Men Style</p>
          <p>2023</p>
        </div></SwiperSlide>
  <SwiperSlide> <div className={styles.categories_options}>
          <img src={womnes} alt="kids" />
          <p>Women Style</p>
          <p style={{ color: "#FFCC01" }}>2023</p>
        </div></SwiperSlide>
  <SwiperSlide> <div className={styles.categories_options}>
          <img src={latest} alt="kids" />
          <p>Latest Fashion</p>
          <p>2023</p>
        </div></SwiperSlide>
  <SwiperSlide> <div className={styles.categories_options}>
          <img src={sports} alt="kids" />
          <p>Sportswear</p>
          <p style={{ color: "#FFCC01" }}>2023</p>
        </div></SwiperSlide>
  <SwiperSlide> 
        <div className={styles.categories_options}>
          <img src={formal} alt="Formalwear" />
          <p>Formalwear</p>

        </div></SwiperSlide>
  <SwiperSlide> <div className={styles.categories_options}>
          <img src={jacket} alt="Jacket" />
          <p>Jacket</p>
          <p style={{ color: "#FFCC01" }}>2023</p>
        </div></SwiperSlide>
  <SwiperSlide> <div className={styles.categories_options}>
          <img src={jeans} alt="Jeans" />
          <p>Jeans</p>
          <p>2023</p>
        </div></SwiperSlide>
  <SwiperSlide> <div className={styles.categories_options}>
          <img src={casual} alt="Activewear" />
          <p>Activewear</p>
          <p style={{ color: "#FFCC01" }}>2023</p>
        </div></SwiperSlide>
  <SwiperSlide> <div className={styles.categories_options}>
          <img src={workwear} alt="kids" />
          <p>Workwear</p>
          <p>2023</p>
        </div></SwiperSlide>
  <SwiperSlide><div className={styles.categories_options}>
          <img src={casual} alt="Casualwear" />
          <p>Casualwear</p>
          <p>2023</p>
        </div></SwiperSlide>
  <SwiperSlide>  
        <div className={styles.categories_options}>
          <img src={sesonal} alt="Seasonal clothing" />
          <p >Seasonal clothing</p>

        </div></SwiperSlide>
  <SwiperSlide>
        <div className={styles.categories_options}>
          <img src={kids} alt="kids" />
          <p>Kids Hub</p>

        </div></SwiperSlide>
 
</Swiper>

      
       
       
      
       
       
       
       
      

      </div>

      <div className={styles.Main_div}>
        <div className={styles.textline}>
          <p>Discover the latest fashion trends with our exquisite collection of high-quality clothing and accessories. Elevate your style and indulge in the ultimate shopping experience.</p>
          <div className={styles.bylogo}>
            <div></div>
            <img src={logo} alt="logo" />
          </div>

        </div>
      </div>


      <div className={styles.newproducts}>
        <div className={styles.year}>
          <h1>2023 New Arrivals</h1>
          <button>Shop Now</button>
        </div>
        <div className={styles.products}>
          <Swiper 
          
            breakpoints={
              {
                100:{
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                320:{
                  slidesPerView:3,
                  spaceBetween:10
                },
                768:{
                  slidesPerView:4,
                  spaceBetween:30
                },
                1024:{
                  slidesPerView:5,
                  spaceBetween:30
                }
              }
            }
           
            freeMode={true}
           
            modules={[FreeMode]}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.swiper_slide}>
              <div className={styles.singleproduct}>
                <div> <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/8/tr:w-600,/185b269UDSHT0543_2.jpg?rnd=20200526195200" alt="shirt" /></div>

                <p>U.S. Polo Assn. Denim Co.</p>
                <p>$29.99</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <div className={styles.singleproduct}>
                <div> <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/8/tr:w-600,/185b269UDSHT0543_2.jpg?rnd=20200526195200" alt="shirt" /></div>

                <p>U.S. Polo Assn. Denim Co.</p>
                <p>$29.99</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <div className={styles.singleproduct}>
                <div> <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/8/tr:w-600,/185b269UDSHT0543_2.jpg?rnd=20200526195200" alt="shirt" /></div>

                <p>U.S. Polo Assn. Denim Co.</p>
                <p>$29.99</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <div className={styles.singleproduct}>
                <div> <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/8/tr:w-600,/185b269UDSHT0543_2.jpg?rnd=20200526195200" alt="shirt" /></div>

                <p>U.S. Polo Assn. Denim Co.</p>
                <p>$29.99</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.singleproduct}>
                <div> <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/8/tr:w-600,/185b269UDSHT0543_2.jpg?rnd=20200526195200" alt="shirt" /></div>

                <p>U.S. Polo Assn. Denim Co.</p>
                <p>$29.99</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.singleproduct}>
                <div> <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/8/tr:w-600,/185b269UDSHT0543_2.jpg?rnd=20200526195200" alt="shirt" /></div>

                <p>U.S. Polo Assn. Denim Co.</p>
                <p>$29.99</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.singleproduct}>
                <div> <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/8/tr:w-600,/185b269UDSHT0543_2.jpg?rnd=20200526195200" alt="shirt" /></div>

                <p>U.S. Polo Assn. Denim Co.</p>
                <p>$29.99</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.singleproduct}>
                <div> <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/8/tr:w-600,/185b269UDSHT0543_2.jpg?rnd=20200526195200" alt="shirt" /></div>

                <p>U.S. Polo Assn. Denim Co.</p>
                <p>$29.99</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.singleproduct}>
                <div> <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/8/tr:w-600,/185b269UDSHT0543_2.jpg?rnd=20200526195200" alt="shirt" /></div>

                <p>U.S. Polo Assn. Denim Co.</p>
                <p>$29.99</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>





    </div>
  )
}

export default HomePage