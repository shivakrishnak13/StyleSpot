import React from 'react';
import { useState } from 'react';
import style from "../CSS/Otp.module.css";
import { useNavigate } from 'react-router-dom';

const OTP_box = ({state}) => {
  const navigate = useNavigate();

  const [otp,setOtp] = useState();
  const handlechange =(e)=>{
      setOtp(e.target.value);
  }

  const handleotp=(e)=>{
    e.preventDefault();
      if(otp == '1234'){
        console.log(otp);
        alert("Your order has been placed");
        navigate("/");
      }else{
        alert("Please enter valid OTP");
      }
     
}
return (
  <div className={style.OTP_container} style={{display: state ? "block" : "none"}}>
      <div className={style.OTP_div}>
      <form action="" className={style.OTP_form} onSubmit={handleotp}>
          <label htmlFor="">Enter OTP</label>
          <input type="number" placeholder='Enter OTP' onChange={handlechange} />
          <input type="submit" value="submit" className={style.OTP_btn}  />
      </form>
  </div>
  </div>
  
)
  }
  

export default OTP_box