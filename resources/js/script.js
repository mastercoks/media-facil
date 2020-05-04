window.addEventListener('load', () => {
  this.expand = true;
  this.asidebar = document.querySelector("#aside-bar");
  this.main = document.querySelector("#main");
  this.btnMenu = document.querySelector("#btn-menu");
  btnMenu.onclick = () => {
    this.expand = !this.expand;
    if (this.expand) {
      this.asidebar.classList.remove("menu-hide");
      this.main.classList.add("menu-active");
    } else {
      this.asidebar.classList.add("menu-hide");
      this.main.classList.remove("menu-active");
    }
  };
});