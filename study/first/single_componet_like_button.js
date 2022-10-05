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

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      '좋아요'
    );

  }
}

// const domContainer = document.querySelector('#like_button_container');
const domContainer = document.getElementById("like_button_container");

const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));