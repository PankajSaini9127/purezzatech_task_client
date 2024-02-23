import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/page/Home";

//adding bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./component/page/Auth";
import Register from "./component/page/Register";
import SimpleSnackbar from "./component/utils/Alert";
import { useState } from "react";
import Main from "./component/page/Main";

function App() {
     //snakeBar
     const [alert, setAlert] = useState({ open: false, success: false, msg: "" });
  return (
    <BrowserRouter>
     <SimpleSnackbar open={alert.open} setOpen={setAlert} msg={alert.msg} success={alert.success}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Main/>} />
        <Route path="/auth" element={<Auth alert={alert} setAlert={setAlert}/>} />
        <Route path="/register" element={<Register alert={alert} setAlert={setAlert}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
