import { Box, TextField, Button, FormControl, Typography, InputAdornment, IconButton } from "@mui/material";
import React, { useState } from "react";

//css
import "../../assets/css/auth.css";

import image from "../../assets/images/SamarthEV.webp";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/api";

function Auth({setAlert}) {

  const [formData,setFormData] = useState({showPassword:false,email:"",password:""});
  const [formError,setFormError] = useState(null);
  
  const navigate = useNavigate();
  function handleChange(e){
   console.log(e.target.name)
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });

    setFormError({
      ...formError,[e.target.name]:""
    });

  }

  function handleTogglePasswordVisibility(){
    setFormData({...formData,showPassword:!formData.showPassword});
  };

  //validate form data
  function validate(data){
    let error ={};
    if(data.email === "" ){
       error.email = "This Field is required !"
    }else if(data.password === ""){
      error.password = "This Field is Required !"
    }

    setFormError(error);
    if(Object.keys(error).length !== 0){
      return false
    }else{
      return true
    }
  }

 async function handleSubmit(e){
    try {
      e.preventDefault();
      if(validate(formData)){
        delete formData.showPassword;
           const result = await login(formData);
           if(result.status === 200){
            setAlert({open:true,success:true,msg:result.message});
            setFormData({email:"",password:"",showPassword:false});
            navigate("/home");
           }else{
            setAlert({open:true,success:false,msg:result.message});
           }
      }else{
        console.log("validation Error")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box className="auth-wrapper">
      <Box component={"img"} src={image} alt="logo" />
      <Box component={"form"} onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            variant="outlined"
            label="Email"
            placeholder="Email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
         {formError?.email&& <Typography color="red">{formError.email}</Typography>} 
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            placeholder="*******"
            name="password"
            type={!formData.showPassword ?"password":"text"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
         {formError?.password&& <Typography color="red">{formError.password}</Typography>} 
        </FormControl>

        <Button type="submit">Sign In</Button>

        <Typography>
          Don't have Account? <Link to="/register">Register Now</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Auth;
