function togglesidebar() {
  document.getElementsByClassName("sidebar")[0].classList.add("active");
  console.log("activated sidebar");
}
function closesidebar() {
  document.getElementsByClassName("sidebar")[0].classList.remove("active");
  console.log("deactivated sidebar");
}
