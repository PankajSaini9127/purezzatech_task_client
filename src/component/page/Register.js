import {
  Box,
  TextField,
  Button,
  FormControl,
  Typography,
  InputAdornment,
  IconButton,
  Snackbar,
} from "@mui/material";
import React, { useState } from "react";

//css
import "../../assets/css/auth.css";

import image from "../../assets/images/SamarthEV.webp";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { RegisterAPI } from "../../services/api";

let initialData = {
  showPassword: false,
  showConfirmPassword: false,
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

function Register({setAlert}) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialData);
  const [formError, setFormError] = useState(null);


  function handleTogglePasswordVisibility(password) {
    if (password) {
      setFormData({ ...formData, showPassword: !formData.showPassword });
    } else {
      setFormData({
        ...formData,
        showConfirmPassword: !formData.showConfirmPassword,
      });
    }
  }

  function handleChange(e) {
    setFormError({
      ...formError,
      [e.target.name]: "",
    });
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  //validate form data
  function validate(data) {
    let error = {};
    if (data.name === "") {
      error.name = "This Field is required !";
    } else if (data.email === "") {
      error.email = "This Field is required !";
    } else if (data.password === "") {
      error.password = "This Field is Required !";
    } else if (data.cpassword === "") {
      error.cpassword = "Please Enter Confirm Password .";
    } else if (data.password !== data.cpassword) {
      error.cpassword = "Password Not Match.";
    }

    setFormError(error);
    if (Object.keys(error).length > 0) {
      return false;
    } else {
      return true;
    }
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      if (validate(formData)) {
        delete formData.showPassword;
        delete formData.showConfirmPassword;
        delete formData.cpassword;

        const result = await RegisterAPI(formData);
        if (result.status === 200) {
          setAlert({open:true,success:true,msg:result.message});
          setFormData(initialData);
            navigate("/auth");
        }else{
          setAlert({open:true,success:false,msg:result.message});
        }
      } else {
        console.log("validation Error");
      }
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <Box className="auth-wrapper">
     
      <Box component={"img"} src={image} alt="logo" />
      <Box component={"form"} onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            variant="outlined"
            label="Name"
            placeholder="Name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          {formError?.name && (
            <Typography color="red">{formError.name}</Typography>
          )}
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            label="Email"
            placeholder="Email"
            type="text"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          {formError?.email && (
            <Typography color="red">{formError.email}</Typography>
          )}
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            label="Password"
            placeholder="*******"
            name="password"
            onChange={handleChange}
            value={formData.password}
            type={!formData.showPassword ? "password" : "text"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => handleTogglePasswordVisibility(true)}
                    edge="end"
                  >
                    {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {formError?.password && (
            <Typography color="red">{formError.password}</Typography>
          )}
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            label="Confirm Password"
            placeholder="*******"
            name="cpassword"
            onChange={handleChange}
            value={formData.cpassword}
            type={!formData.showConfirmPassword ? "password" : "text"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => handleTogglePasswordVisibility(false)}
                    edge="end"
                  >
                    {formData.showConfirmPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {formError?.cpassword && (
            <Typography color="red">{formError.cpassword}</Typography>
          )}
        </FormControl>

        <Button type="submit">Sign Up</Button>

        <Typography>
          Already have Account? <Link to="/auth">Login Now</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Register;
