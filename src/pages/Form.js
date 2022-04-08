import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import {useRef} from "react";
import  prizeImage  from '../assets/prize.png'
import validation from '../components/validation';
import "./style/Form.css";

function Form(){

   const navigate = useNavigate();
   const checkboxRef1 = useRef();
   const checkboxRef2 = useRef();
   const [checkBoxValid, setCheckBoxValid] = useState(false);
   const [addClass, setAddClass] = useState(false);
   const [errors,setErrors] = useState({});
   
   const [values, setValues] = useState({
      firstName:"",
      lastName:"",
      dob:"",
      email:"",
      mobileNumber:"",
      streetAddress:"",
      city:"",
      postalCode:"",
   })

   // * Checks totall Errors
   useEffect(() => {
      if(errors.totalErrors==0 && checkBoxValid){
         navigate('/MatchGame')
      }
   },[errors])
   
   // * Checkbox Validation
   function isCheckboxValid(){
      if(checkboxRef1.current.checked == false || checkboxRef2.current.checked == false){
         setAddClass(true)
      }else{
         setAddClass(false)
         setCheckBoxValid(true)
      }
   }
   
   // * Runs when input value changes 
   const handleChange = (e) =>{
      setValues({
         ...values, 
         [e.target.name]:e.target.value 
      })
   }

   // * Form Submisson
   function handleformSubmit(e){
      e.preventDefault();
      setErrors(validation(values))
      isCheckboxValid()
      window.scrollTo(0, 0);
   }  

	return (
      <>
			<section className="registration-intro">
				<div className="prizeImage">
					<img  className="logo" src={prizeImage} alt="logo"/>
				</div>
				<p>
					Redeem your coupons and BuyMore
					Dollar points at your favourite restaurants.
				</p>
			</section>

			<h1>Registration</h1>
			
			<div id="errorBox" className={addClass ? 'erroBoxStyle'  : 'boxNone'}>
				<p id="checkBoxError">You must agree with the Terms and Conditions and receiving promotional emails.</p>
			</div> 

			{/* Registration Form */}
			<form>
		
				{/* Full Name */}
				<section className="full-name">
					<div>
						<label htmlFor="firstName">First Name</label>
						<input 
                     name="firstName" 
                     type="text" id="firstName" 
                     placeholder="first name" 
                     value={values.firstName}
                     onChange={handleChange}/>
						<p id="firstNameError" className="error">{errors.firstName}</p>
					</div>
					<div>
						<label htmlFor="lastName">Last Name</label>
						<input 
                     name="lastName" 
                     type="text" 
                     id="lastName" 
                     placeholder="last name" 
                     value={values.lastName}
                     onChange={handleChange}/>
						<p id="lastNameError" className="error">{errors.lastName}</p>
					</div>
				</section>

				{/* Date of Birth */}
				<section>
					<label htmlFor="dob">Date of Birth</label>
					<input 
                  type="date" 
                  id="dateBirth" 
                  name="dob" 
                  min="1900-01-01"  
                  ax="2022-12-31" 
                  value={values.dob}
                  onChange={handleChange}/>
					<p id="dobError" className="error">{errors.dob}</p>
				</section>

				{/* Email Address */}
				<section>
					<label htmlFor="email">E-mail</label>
					<input 
                  type="text" 
                  name="email" 
                  id="email" 
                  placeholder="Email Address" 
                  value={values.email}
                  onChange={handleChange}/>
					<p id="emailAddressError" className="error">{errors.email}</p>
				</section>

				{/* Phone Number */}
				<label htmlFor="mobileNumber">Phone Number</label>
				<section className="phone-number">
					<select name="phoneCode" id="phoneCodes">
						<option value="+1">+1</option>
						<option value="+1">+1 ( US )</option>
					</select>
					<div>
						<input 
                     type="text" 
                     placeholder="eg. 7686891821"  
                     name='mobileNumber' 
                     id="mobileNumber" 
                     value={values.mobileNumber}
                     onChange={handleChange}/>
						<p id="mobileNumberError" className="error">{errors.phone}</p>
					</div>
				</section>

				{/* Full Address */}
				<section>
					<label htmlFor="address">Address</label>
					<input 
                  type="text" 
                  id="address" 
                  placeholder="Street Address"
                  name='streetAddress'
                  value={values.streetAddress}
                  onChange={handleChange}/>
					<p id="addressError"  className="error">{errors.streetAddress}</p>
					<div className="stateBox">
						<div>
							<label htmlFor="">Province</label>
							<select>
								<option value="Ontario">Ontario</option>
								<option value="Alberta">Alberta</option>
								<option value="British Columbia">British Columbia</option>
								<option value="Nova Scotia">Nova Scotia</option>
							</select>
						</div>
						<div>
							<label htmlFor="city">City</label>
							<input 
                        name="city" 
                        type="text" 
                        id="city" 
                        placeholder="Enter your City Name" 
                        value={values.city}
                        onChange={handleChange}/>
							<p id="cityError" className="error">{errors.city}</p>
						</div>
					</div>
					<label htmlFor="postalCode">Postal Code</label>
					<input 
                  name="postalCode" 
                  type="text" placeholder="" 
                  id="postalCode" 
                  value={values.postalCode}
                  onChange={handleChange}/>
					<p id="postalCodeError" className="error">{errors.postalCode}</p>
				</section>

				{/* Agreement Section */}
				<section className="agreement">
					<input type="checkbox" id="checkBox1" name="checkbox" ref={checkboxRef1}/>
					<p className="checkbox" htmlFor="agreement">I acknowledge that I have read and agree to Rules and regulations.</p>
					<p></p>
					<input type="checkbox" id="checkBox2" name="checkbox" ref={checkboxRef2}></input>
					<p className="checkbox">I agree to receive special offers and discount coupons via email.</p>
				</section>
            
            {/* Submit Button */}
				<input type="submit" id="submit" className="submit-btn" value="Submit" onClick={handleformSubmit}></input>
			</form>
		</>
	)
}

export default Form;