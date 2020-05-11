window.addEventListener('load', () => {
  this.expand = false;
  this.menubar = document.querySelector("#menu-bar");
  this.btnMenu = document.querySelector("#btn-menu");
  btnMenu.onclick = () => {
    this.expand = !this.expand;
    if (this.expand) {
      this.menubar.classList.remove("menu-hide");
    } else {
      this.menubar.classList.add("menu-hide");
    }
  };
});