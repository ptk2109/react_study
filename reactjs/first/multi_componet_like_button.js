'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return '좋아요 클릭! ' + this.props.commentID;
    }

    const e = React.createElement;
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      '좋아요'
    );

    // return (
    //   <button onClick={() => this.setState({ liked: true })}>
    //     Like
    //   </button>
    // );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    const root = ReactDOM.createRoot(domContainer);
    root.render(
      e(LikeButton, { commentID: commentID })
    );
  });