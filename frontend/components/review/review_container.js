import { connect } from 'react-redux';
import { createReview, fetchReviews, clearReviewErrors } from '../../actions/review_actions';
import Review from './review';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const room = state.currentRoom;
  const errors = state.reviews.errors;

  return {
    reviews: state.reviews.reviews,
    errors: state.reviews.errors,
    room: state.currentRoom,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  createReview: booking => dispatch(createReview(booking)),
  fetchReviews: id => dispatch(fetchReviews(id)),
  clearReviewErrors: () => dispatch(clearReviewErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Review);
