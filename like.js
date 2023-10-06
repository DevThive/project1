// script.js

const likeButton = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");

// 초기 좋아요 상태를 로컬 저장소에서 가져오기
let isLiked = localStorage.getItem("isLiked") === "true";
let likes = parseInt(localStorage.getItem("likes")) || 0;

// 페이지 로딩 시 좋아요 상태 업데이트
updateUI();

likeButton.addEventListener("click", () => {
  isLiked = !isLiked;

  // 좋아요 상태를 로컬 저장소에 저장
  localStorage.setItem("isLiked", isLiked);

  if (isLiked) {
    likes++;
  } else {
    likes--;
  }

  // 좋아요 수를 로컬 저장소에 저장
  localStorage.setItem("likes", likes);

  // UI 업데이트
  updateUI();
});

function updateUI() {
  likeCount.textContent = likes;
  likeButton.textContent = isLiked ? "좋아요 취소" : "좋아요";
}

/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
const firebaseConfig = {
  apiKey: "AIzaSyD6AvglKAL3qW2jR46aZXVBT5PtGFqfh-4",
  authDomain: "sparta-94f20.firebaseapp.com",
  projectId: "sparta-94f20",
  storageBucket: "sparta-94f20.appspot.com",
  messagingSenderId: "616741352088",
  appId: "1:616741352088:web:73ed988c6b8ef4184bd6ed",
  measurementId: "G-MFETGLLRMX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const likeButton = document.getElementById("like-button");
const likeCount = document.getElementById("like-count");

let likes = 0;
let isLiked = false;

likeButton.addEventListener("click", () => {
  if (isLiked) {
    likes--;
  } else {
    likes++;
  }
  
});
*/
