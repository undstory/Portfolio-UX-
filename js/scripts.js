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
