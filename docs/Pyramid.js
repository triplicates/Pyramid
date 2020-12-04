"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pyramid = /*#__PURE__*/function () {
  function Pyramid(rows) {
    _classCallCheck(this, Pyramid);

    this.rowsCount = rows || 12;
    this.row = {
      className: "row",
      root: "pyramid",
      anim: "show"
    };
    this.brick = {
      className: "box",
      root: this.row.className
    };
  }

  _createClass(Pyramid, [{
    key: "Errors",
    value: function Errors() {
      var ERROR = [];

      if (isNaN(this.rowsCount) || typeof this.rowsCount != "number") {
        ERROR.push("ERROR: rows count can only be a number");
      }

      ERROR.forEach(function (err) {
        throw new Error(err);
      });
    }
  }, {
    key: "createElement",
    value: function createElement(_type) {
      var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        className: "block",
        root: "pyramid"
      };
      var className = obj.className,
          root = obj.root,
          container = document.querySelector(".".concat(root));
      var element = "<".concat(_type, " class=").concat(className, "></").concat(_type, ">");
      container.insertAdjacentHTML("afterbegin", element);
    }
  }, {
    key: "createRow",
    value: function createRow() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      for (var i = 0; i < count; i++) {
        this.createElement("div", this.row);
      }
    }
  }, {
    key: "createBrick",
    value: function createBrick() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      for (var i = 0; i < count; i++) {
        this.createElement("div", this.brick);
      }
    }
  }, {
    key: "isSimple",
    value: function isSimple(x) {
      var result = false;
      if (x < 2) return;
      if (x === 2) result = true;

      for (var i = 2; i < x; i++) {
        if (x % i === 0) {
          result = false;
          return;
        } else result = true;
      }

      return result;
    }
  }, {
    key: "controlNumbers",
    value: function controlNumbers() {
      var blocks = document.querySelectorAll(".box");

      for (var i = 0; i < blocks.length; i++) {
        blocks[i].textContent = i + 1;

        if (this.isSimple(Number(blocks[i].textContent))) {
          blocks[i].classList.add('box_marked');
        }
      }
    }
  }, {
    key: "createStructure",
    value: function createStructure(x) {
      while (x >= 1) {
        this.createRow();
        this.createBrick(x);
        x--;
      }
    }
  }, {
    key: "clearPyramid",
    value: function clearPyramid() {
      var wrapper = document.querySelector('.pyramid');

      while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
      }
    }
  }, {
    key: "createPyramid",
    value: function createPyramid() {
      this.Errors();
      this.createStructure(this.rowsCount);
      this.controlNumbers();
    }
  }]);

  return Pyramid;
}();
