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

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return '좋아요 클릭!';
    }

    // return e(
    //   'button',
    //   { onClick: () => this.setState({ liked: true }) },
    //   '좋아요'
    // );

    return (
        <button onClick={() => this.setState({ liked: true })}>
          Like
        </button>
      );
  }
}

// const domContainer = document.querySelector('#like_button_container');
const domContainer = document.getElementById("like_button_container");

const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));