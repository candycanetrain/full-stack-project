import * as ReviewUtil from '../util/review_api_util';
import {hashHistory} from 'react-router';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";


export const fetchReviews = (id) => dispatch => {
 return(
  ReviewUtil.fetchReviews(id)
    .then(reviews => dispatch(receiveReviews(reviews)),
    err => dispatch(receiveReviewErrors(err.responseJson))) 
  );
};

export const fetchReview = (id) => dispatch => {
  return(
    ReviewUtil.fetchReview(id)
    .then(review => dispatch(receiveReview(review)),
    err => dispatch(receiveReviewErrors(err.responseJSON)))
  );
};

export const createReview = review => dispatch => {
  return(
    ReviewUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)),
    err => dispatch(receiveReviewErrors(err.responseJSON)))
)};

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = (review) =>  ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS
});

