// script.js
$(".content").click(function () {
  $(".content").toggleClass("heart-active");
  $(".text").toggleClass("heart-active");
  $(".numb").toggleClass("heart-active");
  $(".heart").toggleClass("heart-active");
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
// Firebase 구성 정보 설정
const firebaseConfig = {
  apiKey: "AIzaSyD6AvglKAL3qW2jR46aZXVBT5PtGFqfh-4",
  authDomain: "sparta-94f20.firebaseapp.com",
  databaseURL: "https://sparta-94f20-default-rtdb.firebaseio.com",
  projectId: "sparta-94f20",
  storageBucket: "sparta-94f20.appspot.com",
  messagingSenderId: "616741352088",
  appId: "1:616741352088:web:73ed988c6b8ef4184bd6ed",
  measurementId: "G-MFETGLLRMX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
