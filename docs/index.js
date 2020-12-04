"use strict";

function control() {
  var btn = document.querySelector('.header__counter');
  btn.addEventListener('change', function () {
    var rows = +btn.value;

    if (rows > btn.max || rows < btn.min) {
      btn.classList.add('header__counter_error');
      setTimeout(function () {
        btn.classList.remove('header__counter_error');
      }, 500);
      return;
    } else {
      var instance = new Pyramid(rows);
      instance.clearPyramid();
      instance.createPyramid();
    }
  });
}

control();
