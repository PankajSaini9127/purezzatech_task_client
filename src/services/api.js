import axios from "axios";

import config from "../config.json";

const API = config.API;

export async function login (data){
   try {
    const res = await axios.post(`http://localhost:8080/auth/sign-in`,data);

    if(res){
        return res.data;
    }
   } catch (error) {
    console.log("error while calling login API",error)
   }
}


export async function RegisterAPI (data){
    try {
     const res = await axios.post(`http://localhost:8080/auth/sign-up`,data);
 
     if(res){
         return res.data;
     }
    } catch (error) {
     console.log("error while calling register API",error)
    }
 }