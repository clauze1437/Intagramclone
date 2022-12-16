// TODO: answer here
import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../api/config";

export default function LikeDislikeButton({id, image, isLiked, isDisliked, likeCount, dislikeCount}) {
  // TODO: answer here
  const [like, setLike] = useState(likeCount);
  const [dislike, setDislike] = useState(dislikeCount);
  const [likeActive, setLikeActive] = useState(isLiked);
  const [dislikeActive, setDislikeActive] = useState(isDisliked);

  const apiUrl = `${API_URL}/post/${id}`
  const handleLike = async () => {
    if (likeActive) {
      setLikeActive(false);
      setLike(like - 1);
      await axios.get(`${apiUrl}/unlike`, { withCredentials: true });
    } else {
      setLikeActive(true);
      setLike(like + 1);
      await axios.get(`${apiUrl}/like`, { withCredentials: true });
      if (dislikeActive) {
        setDislikeActive(false);
        setLike(like + 1);
        setDislike(dislike - 1);
        await axios.get(`${apiUrl}/undislike`, { withCredentials: true });
      }
    }
  }

  const handleDislike = async () => {
    if (dislikeActive) {
      setDislikeActive(false);
      setDislike(dislike - 1);
      await axios.get(`${apiUrl}/undislike`, { withCredentials: true });
    } else {
      setDislikeActive(true);
      setDislike(dislike + 1);
      await axios.get(`${apiUrl}/dislike`, { withCredentials: true });
      if(likeActive) {
        setLikeActive(false);
        setDislike(dislike + 1);
        setLike(like - 1);
        await axios.get(`${apiUrl}/unlike`, { withCredentials: true });
      }
    } 
  }

  return (
    <div className="mb-2">
      <button
        onClick={() => handleLike()}
        className="btn btn-sm btn-outline-secondary"
        title="like"
        aria-label="Like Button"
      >
        <i className="fa-solid fa-thumbs-up"></i>
      </button>
      <button
        onClick={() => handleDislike()}
        className="btn btn-sm btn-outline-secondary ms-2"
        title="dislike"
        aria-label="Dislike Button"
      >
        <i className="fa-solid fa-thumbs-down"></i>
      </button>

      <div className="mt-1">
        <small className="text-muted" aria-label="Like Count">
          Like: {like} |{" "}
        </small>
        <small className="text-muted" aria-label="Dislike Count">
          Dislike: {dislike}
        </small>
      </div>
    </div>
  );
}
