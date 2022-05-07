const toggler = document.querySelector(".hero__toggler--icon");
const mobileNav = document.querySelector(".hero__mobile");

toggler.addEventListener("click", () => {
  console.log("Hello");
  mobileNav.classList.remove("hiddens");
  mobileNav.classList.add("visible");
});

document
  .querySelectorAll(".mobile__item, .mobile__close")
  .forEach((element) => {
    element.addEventListener("click", () => {
      // mobileNav.style.display = "none";
      mobileNav.classList.remove("visible");
      mobileNav.classList.add("hiddens");
    });
  });

const scrollToTopBtn = document.querySelector(".top-btn");

const rootElement = document.documentElement;
function handleScroll() {
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.1) {
    // Show button
    scrollToTopBtn.classList.add("show-top-btn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("show-top-btn");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
