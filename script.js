window.addEventListener('load', () => {
  this.expand = true;
  this.asidebar = document.querySelector("#aside-bar");
  this.btnMenu = document.querySelector("#btn-menu");
  btnMenu.onclick = () => {
    this.expand = !this.expand;
    if (this.expand) {
      this.asidebar.classList.remove("hide");
    } else {
      this.asidebar.classList.add("hide");
    }
  };
});