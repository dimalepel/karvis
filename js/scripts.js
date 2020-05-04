(function () {
  function hasClass(el, cls) {
    return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
  }

  let menuOpen = document.getElementById('open-menu');
  if (menuOpen) {
    let body = document.querySelector('body');
    let interpreterWrapper = document.getElementById('interpreter-wrapper');
    menuOpen.addEventListener('click', function (event) {
      event.preventDefault();
      if (hasClass(menuOpen, 'active')) {
        this.classList.remove('active');
        interpreterWrapper.classList.remove('open');
        body.classList.remove('overflow');
      } else {
        this.classList.add('active');
        interpreterWrapper.classList.add('open');
        body.classList.add('overflow');
      }
    });
  }
})();