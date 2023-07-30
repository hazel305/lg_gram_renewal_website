let videoSection = document.querySelector(".main_sec01_video"),
  videoWrapper = videoSection.querySelector(".main_video"),
  videoSlide = videoSection.querySelectorAll(".video_slide"),
  videos = videoSection.querySelectorAll("video"),
  videoPager = videoSection.querySelector(".video_pager"),
  videoCount = videoSlide.length,
  videoCurrentIdx = 0,
  videoPagerHtml = "";

// function setVideo() {
//   if (window.innerWidth <= 768) {
//     let video1 = document.getElementById("video1");
//     let video2 = document.getElementById("video2");
//     video1.setAttribute(
//       "src",
//       "https://res.cloudinary.com/damxzwed4/video/upload/v1690634463/newjeans_gram_mb_fea6sh.mp4"
//     );
//     video2.setAttribute(
//       "src",
//       "https://res.cloudinary.com/damxzwed4/video/upload/v1690634463/newjeans_gram_mb_fea6sh.mp4"
//     );
//     videoPager.style.display = "none";
//   } else {
//     let video1 = document.getElementById("video1");
//     let video2 = document.getElementById("video2");
//     video1.setAttribute(
//       "src",
//       "https://res.cloudinary.com/damxzwed4/video/upload/v1690634452/gram_global_dtaxus.mp4"
//     );
//     video2.setAttribute(
//       "src",
//       "https://res.cloudinary.com/damxzwed4/video/upload/v1690634515/gram_dance_ljnqcm.mp4"
//     );
//     videoPager.style.display = "block";
//   }
// }

// window.addEventListener("resize", setVideo);
// setVideo();

//스크롤다운 버튼 사이즈에 따라 바꿔주기
let scrollButton = document.getElementById("scroll_btn");
function updateScrollButton() {
  if (window.innerWidth <= 768) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "block";
  }
}
window.addEventListener("resize", updateScrollButton);
updateScrollButton();

if (videoCount > 0) {
  videoSlide.forEach((item, idx) => {
    item.style.left = `${idx * 100}%`;
    let activeClass = idx === 0 ? " active" : "";
    videoPagerHtml += `<a href="#" class="${activeClass}">${idx + 1}</a>`;
  });
}

videoPager.insertAdjacentHTML("beforeend", videoPagerHtml);
let videoPagerBtn = videoPager.querySelectorAll("a");

function video_moveSlide(num) {
  videoWrapper.style.left = `${num * -100}%`;
  videoCurrentIdx = num;
  for (let pg of videoPagerBtn) {
    pg.classList.remove("active");
  }
  videoPagerBtn[videoCurrentIdx].classList.add("active");

  for (let i = 0; i < videos.length; i++) {
    if (i !== videoCurrentIdx) {
      videos[i].pause();
      videos[i].currentTime = 0;
    }
  }

  videos[videoCurrentIdx].play();
}

videoPagerBtn.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    video_moveSlide(idx);
  });
});

function video_autoSlide() {
  let videoTimer = setInterval(() => {
    let videoSlideNext = (videoCurrentIdx + 1) % videoCount;
    video_moveSlide(videoSlideNext);
  }, 20000);
}
video_autoSlide();
