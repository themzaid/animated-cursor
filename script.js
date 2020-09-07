// Custom cursor
let customCursor = document.querySelector(".cursor");
let navItems = document.querySelectorAll("nav div");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  customCursor.style.top = e.pageY + "px";
  customCursor.style.left = e.pageX + "px";
}
// Custom cursor end

// Animate custom cursor on nav items

navItems.forEach((link) => {
  link.addEventListener("mouseover", () => {
    customCursor.classList.add("cursor-grow");
  });
});

navItems.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    customCursor.classList.remove("cursor-grow");
  });
});
