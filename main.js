// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";

import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";


//  首頁導航選中狀態
// 獲取所有的 li 元素
const listItems = document.querySelectorAll(".index-btn");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    // 移除其他所有 li 元素的選中狀態
    listItems.forEach((li) => li.classList.remove("selected"));

    // 將當前點擊的 li 設為選中狀態
    item.classList.add("selected");
  });
});

// 旅宿導航內部選中狀態，日期、1人獨旅按鈕
const tablistItems = document.querySelectorAll(".tab-index-btn");
tablistItems.forEach((item) => {
  item.addEventListener("click", () => {
    // 移除其他所有 li 元素的選中狀態
    tablistItems.forEach((li) => li.classList.remove("tabSelected"));

    // 將當前點擊的 li 設為選中狀態
    item.classList.add("tabSelected");
  });
});

// 旅宿 tab swiper
const accommodation_swiper = new Swiper(".accommodation-swiper", {
  slidesPerView: 3,
  spaceBetween: 12,
});
// 探索頁、旅宿詳細共用 圖片 swiper
const explore_detail_swiper = new Swiper(".explore_detail_swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets", // 只顯示圓點分頁
  },
});

// 旅宿詳細頁面 - 房型介紹 圖片 swiper
const swiper_room_type_swiper = new Swiper(".swiper_room_type", {
  slidesPerView: 3,
  spaceBetween: 8,
});
