import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export default function SimpleSnackbar({ open, setOpen,msg,success }) {
  const handleClose = () => {
    setOpen({open:false,success:false,msg:""});
  };

  

  return (
    <div>
   {open &&  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:"top",horizontal:"right"}}>
        <Alert
          onClose={handleClose}
          severity={success?"success":"error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
         {msg}
        </Alert>
      </Snackbar>}  
    </div>
  );
}
