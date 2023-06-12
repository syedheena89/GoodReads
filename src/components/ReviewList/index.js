import React from "react";
import { useState } from "react";
import "./styles.css";
import ReviewAdd from "../ReviewAdd";
const ReviewList = () => {
  const [modal, setModal] = useState("");
  const [reviewData, setReviewData] = useState([]);
  return (
    <div className="container">
      <h1 className="text-center"> REVIEWS</h1>
      <div className="container">
        {modal && (
          <ReviewAdd
            modal={modal}
            setModal={setModal}
            reviewData={reviewData}
            setReviewData={setReviewData}
          />
        )}

        <ul className="reviewList">
          {reviewData.map((review, index) => (
            <li key={index}>
              <h3>{review.bookName}</h3>
              <p> RAting : {review.rating}</p>
              <p> Review : {review.review}</p>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={(e) => {
            e.preventDefault();
            setModal(true);
          }}
        >
          Add Review
        </button>
      </div>
    </div>
  );
};

export default ReviewList;
