// TODO: answer here
import React from "react";
import LikeDislikeButton from "./LikeDislikeButton";

export default function PostCard({ image, caption, username, userId, date }) {
  // TODO: answer here
  const myStyle = {
    height: "320px",
    objectFit: "cover"
  };
  return (
    <div className="col" aria-label="Post Card">
      <div className="card h-100">
        <div className="card-header">
          <h6 href="profile" aria-label="Post User Name" className="fw-bold author" style={{ fontSize: '17px' }}>{username}</h6>
          <small className="text-muted" style={{ fontSize: "12px" }} aria-label="Post Date">{date}</small>
        </div>
        <div>
          <img src={image} className="card-img-top" style={myStyle} alt="Post Image" aria-label="Post Image" />
        </div>
        <div className="card-body">
          <LikeDislikeButton
            id={userId}
            image={image}
            isLiked={false}
            isDisliked={false}
            likeCount={0}
            dislikeCount={0}
          />
          <p className="card-text ellipsis" aria-label="Post Caption">
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
}
