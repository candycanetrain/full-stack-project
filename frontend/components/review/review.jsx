import React from 'react';
import { Link } from 'react-router';
import {hashHistory} from 'react-router';
import ReactStars from 'react-stars'
import { render } from 'react-dom'
import StarRating from 'react-star-rating';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      body: ""
    };

    this.handleReview = this.handleReview.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.reviews.length !== newProps.reviews.length) {
      this.props.fetchReviews({room_id: this.props.roomId});
    }
  }

  componentWillMount() {
    this.props.fetchReviews({room_id: this.props.roomId})
  }

  componentWillUnmount() {
    this.props.clearReviewErrors();
  }

  ratingChanged(newRating) {
    this.setState({
      rating: newRating
    });
  }

  updateBody(e) {
    e.preventDefault();

    this.setState({body: e.currentTarget.value});
  }

  handleReview(e) {
    e.preventDefault();
    const currentRoomId = this.props.roomId;
    const body = this.state.body;
    const rating = this.state.rating;
    this.setState({body: "", rating: 0});
    this.props.createReview({room_id: currentRoomId, body: body, rating: rating})
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul className="errors-for-reviews">
          {this.props.errors.map((error,i) => (
            <li key={`errors-${i} `}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  renderReviews(hasReviews) {
    if (hasReviews) {
      const reviews = this.props.reviews;

      return(
        <ul className="reviews-show">
          {reviews.map((review) => (
            <li key={review.id}>
              <div className="review-user">{review.user.name}: {review.rating} stars</div>
              <div className="review-body">{review.body}</div>
            </li>
          ))}
        </ul>
      )
    } else {
      return(
        <div className="no-reviews">
         There are currently no reviews for this room. Have you stayed here? Leave a review below to help others!
       </div>
      )
    }
  }

  render() {
    let hasReviews;
    if (this.props.reviews.length !== 0) {
      hasReviews = true;
    } else {
      hasReviews = false;
    }

      return(
        <div className="review">
          <h3>Reviews</h3>
          {this.renderReviews(hasReviews)}
          <h4 className="review-header">Leave a Review: </h4>
          {this.renderErrors()}
          <form className="review-form" action="">
              <label className="review-label" htmlFor="review-body"></label>
              <ReactStars
                count={5}
                onChange={this.ratingChanged}
                size={24}
                color2={'#ffd700'}
                half={false}
                value={this.state.rating}/>
              <textarea className="review-body-textarea" placeholder="Write a review here!" onChange={this.updateBody} value={this.state.body}>
              </textarea>

          </form>
          <button className="review-button" onClick={this.handleReview}> Submit Review</button>
                {this.renderErrors}

        </div>
      );
    }
}

export default Review;
