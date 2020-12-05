"use strict";

function getRowsCount() {
  var count = document.querySelector('.header__counter').value;
  return +count;
}

function btnError(count) {
  var btn = document.querySelector('.header__counter'),
      result = false;

  if (count > btn.max || count < btn.min) {
    btn.classList.add('header__counter_error');
    setTimeout(function () {
      btn.classList.remove('header__counter_error');
    }, 500);
    result = true;
  }

  return result;
}

function camera(step) {
  var camera = document.querySelector('.camera');
  camera.scrollLeft = camera.scrollWidth / 2 - 698;
  window.addEventListener('keydown', function (_ref) {
    var key = _ref.key;

    switch (key) {
      case "ArrowLeft":
        camera.scrollLeft -= step;
        break;

      case "ArrowRight":
        camera.scrollLeft += step;
        break;
    }
  });
}

function createPyramid() {
  var btn = document.querySelector('.header__counter');
  btn.addEventListener('change', function () {
    var count = getRowsCount(),
        isError = btnError(count),
        instance = new Pyramid(count);
    if (isError) return;
    instance.clearPyramid();
    instance.createPyramid();
    camera(16);
  });
}

;
createPyramid();