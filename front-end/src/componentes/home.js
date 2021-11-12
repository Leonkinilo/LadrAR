import React, { Component, useState } from "react";
import { Card,Button } from "react-bootstrap";
import axios from "axios";
// const API = axios.create({
//   baseURL: `${"http://ladr-ar.herokuapp.com/home"}`
// });

async function getdatos(){
  const response = await axios.get("http://ladr-ar.herokuapp.com/home", {
  });
  return response;
}
const data = getdatos();

export default function home() {

//  try {
//    getdatos();
//  } catch (error) {
//    console.log(error)
//  }



  return (

    <div>
      <Button onClick={()=>
      console.log(getdatos({data}))
      }></Button>
     
      <h1>tu re vieja</h1>
    </div>
  )
}


