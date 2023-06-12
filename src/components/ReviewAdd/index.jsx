import React, { useState } from "react";


const ReviewAdd = ({ setModal, reviewData, setReviewData }) => {
  const [rating, setRating] = useState(0);
  const [bookName, setBookName] = useState("");
  const [review, setReview] = useState("");

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleBookNameChange = (event) => {
    setBookName(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      bookName: bookName,
      review: review,
      rating: rating,
    };
    setReviewData([...reviewData, newReview]);
    setModal(false);
  };

  return (
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Write Review</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={(e) => {
                e.preventDefault();
                setModal(false);
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label">
                  ReviewerName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  value={bookName}
                  onChange={handleBookNameChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label">
                  Review
                </label>
                <textarea
                  className="form-control"
                  id="message-text"
                  value={review}
                  onChange={handleReviewChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="rating" className="col-form-label">
                  Rating
                </label>
                <select
                  className="form-control"
                  id="rating"
                  value={rating}
                  onChange={handleRatingChange}
                >
                  <option value={0}>Select a rating</option>
                  <option value={1}>1 Star</option>
                  <option value={2}>2 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={5}>5 Stars</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={(e) => {
                e.preventDefault();
                setModal(false);
              }}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAdd;
