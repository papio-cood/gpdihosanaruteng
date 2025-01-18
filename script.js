const hamburger = document.getElementById("hamburger");
const navLink = document.getElementById("nav-link");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("active");
  hamburger.classList.toggle("is-active");
});

// Tampilkan tombol saat scroll melewati 100px
window.onscroll = () => {
  if (window.scrollY > 100) {
    scrollTop.style.display = 'block';
  } else {
    scrollTop.style.display = 'none';
  }
};

// Scroll ke atas saat tombol diklik
scrollTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};