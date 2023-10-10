import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  onValue,
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

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const db = getDatabase();
// 각 인원별 좋아요 갯수 가져오기
const member1 = ref(db, "member/one/likes");
const member2 = ref(db, "member/two/likes");
const member3 = ref(db, "member/three/likes");
const member4 = ref(db, "member/four/likes");

//1번째
onValue(member1, (snapshot) => {
  let num = snapshot.val();
  console.log(num);

  function writedata() {
    const db = getDatabase();

    set(ref(db, "member/one"), {
      likes: num + 1,
    });
    //window.location.reload();
  }
  //1번째 버튼
  $("#heart-btn1").click(async function () {
    writedata();
    //likeNum();
  });
  $("#like-count1").text(num);
});
//2번째
onValue(member2, (snapshot) => {
  let num = snapshot.val();
  console.log(num);

  function writedata() {
    const db = getDatabase();

    set(ref(db, "member/two"), {
      likes: num + 1,
    });
    //window.location.reload();
  }
  //2번째 버튼
  $("#heart-btn2").click(async function () {
    writedata();
    //likeNum();
  });
  $("#like-count2").text(num);
});
//3번째
onValue(member3, (snapshot) => {
  let num = snapshot.val();
  console.log(num);

  function writedata() {
    const db = getDatabase();

    set(ref(db, "member/three"), {
      likes: num + 1,
    });
    //window.location.reload();
  }
  //3번째 버튼
  $("#heart-btn3").click(async function () {
    writedata();
    //likeNum();
  });
  $("#like-count3").text(num);
});
//4번째
onValue(member4, (snapshot) => {
  let num = snapshot.val();
  console.log(num);

  function writedata() {
    const db = getDatabase();

    set(ref(db, "member/four"), {
      likes: num + 1,
    });
    //window.location.reload();
  }

  //4번째 버튼
  $("#heart-btn4").click(async function () {
    writedata();
    //likeNum();
  });
  $("#like-count4").text(num);
});
