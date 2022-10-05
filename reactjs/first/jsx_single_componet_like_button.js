/**
 * 1. jsx 문법으로 파일 작성
 *    - /src/reactjs/jsx_single_componet_like_button.js
 *    - 해당파일이 소스 파일이며, 2번을 이용하면 브라우저가 해석가능한 언어로 변경해줌.(그런것 같음.. -_-;;)
 * 
 * 2.  터미널에서 아래의 명령어를 사용함. 
 *    > npx babel --watch src --out-dir . --presets react-app/prod
 *    - 내용을 그대로 해석하자면 바벨을 이용하여 src 폴더에 있는 것을 react 프리셋으로 변환하여라. 
 *    - 결과로 /reactjs/first/jsx_single_componet_like_button.js 파일이 생성되었으며 / JSX 코드를 일반 자바스크립트 언어로 변환된 듯 하다. 
 *    
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = { liked: false };
    return _this;
  }

  _createClass(LikeButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.liked) {
        return '좋아요 클릭!';
      }

      // return e(
      //   'button',
      //   { onClick: () => this.setState({ liked: true }) },
      //   '좋아요'
      // );

      return React.createElement(
        'button',
        { onClick: function onClick() {
            return _this2.setState({ liked: true });
          } },
        'Like'
      );
    }
  }]);

  return LikeButton;
}(React.Component);

// const domContainer = document.querySelector('#like_button_container');


var domContainer = document.getElementById("like_button_container");

var root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));