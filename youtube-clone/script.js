const menu_icon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const videos = document.querySelectorAll(".video");
const nav_profile_photo = document.querySelector(".nav-profile-photo");
const content_select_nav = document.querySelector(".content-select-nav");
const content_select_nav_div = document.querySelectorAll(
  ".content-select-nav div"
);
const video_content = document.querySelector(".video-content");
const full_content_video = document.querySelectorAll(".full--content-video");
const content_select_nav_right_next_i = document.querySelectorAll(
  ".content-select-nav-right-next button"
);

//for display sidebar when click____________________________________________________
var countForSidebar = 0;
menu_icon.addEventListener("click", () => {
  countForSidebar++;
  if (countForSidebar % 2 === 0) {
    sidebar.classList.remove("sidebar-none");
    sidebar.classList.add("sidebar");
    content_select_nav.style.marginLeft = "250px";
    video_content.style.marginLeft = "250px";
  } else {
    sidebar.classList.add("sidebar-none");
    sidebar.classList.remove("sidebar");
    content_select_nav.style.marginLeft = "95px";
    video_content.style.marginLeft = "95px";
  }
});

//for content select nav when click color property_______________________________________________-
// content_select_nav_div.addEventListener("click", () => {
//   content_select_nav_div.style.color = "black";
//   content_select_nav_div.style.bacgroundColor = "white";
// });

// for content select nav scroll when click
function scrollContentNav(){
  content_select_nav.scrollLeft = content_select_nav.scrollWidth - content_select_nav.clientWidth;
}


// for play video when hover
videos.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

//for adding video on page___________________________________________________________________
function addVideoToPage(
  video_link,
  profile_photo,
  video_description,
  channel_name,
  views,
  time_period
) {
  let addVideo = `<a href="#">
<video
  class="video"
  src="${video_link}"
></video>
<div class="discription-video">
  <img src="${profile_photo}" />
  <div class="discription-part2">
    <p class="video-title">${video_description}</p>
    <p class="channel-name">${channel_name}</p>
    <div class="view-with-time">
      <p class="Views">${views} views</p>
      <p class="time-period">${time_period} ago</p>
    </div>
  </div>
</div>
</a>`;
  video_content.innerHTML = video_content.innerHTML + addVideo;
}
