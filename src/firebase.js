import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCecxu7Pzajghx88mnhMJasqDI_Qf7uc3w",
  authDomain: "ourfitness-ded0f.firebaseapp.com",
  projectId: "ourfitness-ded0f",
  storageBucket: "ourfitness-ded0f.appspot.com",
  messagingSenderId: "395312022361",
  appId: "1:395312022361:web:e7f6bb50b3792c46bd0248",
  measurementId: "G-S0LJ92YJE2",
  // apiKey: process.env.REACT_APP_FB_API,
  // authDomain: process.env.REACT_APP_FB_DOMAIN,
  // projectId: process.env.REACT_APP_FB_PROJECT,
  // storageBucket: process.env.REACT_APP_FB_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FB_SENDER,
  // appId: process.env.REACT_APP_FB_APP,
  // measurementId: process.env.REACT_APP_FB_MEASUREID,
});

export const auth = app.auth();
export default app;
