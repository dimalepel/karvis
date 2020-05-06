(function () {
  /* Проверка наличия класса у элемента */
  function hasClass(el, cls) {
    return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
  }

  /* Открытие меню */
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
  
  /* Подмена вьюпорта */
  const viewPort = document.querySelector('[name="viewport"]');
  if (viewPort) {
    if (screen.width < 980) {
      viewPort.setAttribute('content','width=320, user-scalable=yes');
    } else {
      viewPort.setAttribute('content','width=980, user-scalable=yes');
    }
  }
})();