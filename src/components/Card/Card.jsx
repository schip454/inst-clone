import cn from "classnames";
import React, { useState } from "react";
import "./style.css";
import PhotoModal from "../PhotoModal/PhotoModal";

const Card = ({
  imgUrl,
  className,
  likes,
  comments,
  isLikedByYou,
  onLikeClick,
  id,
  userData,
  onCommentSubmit,
  isMutateLoading,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <div className={cn("cnCardRoot", className)}>
      <img src={imgUrl} alt="img" className="cnCardImage" />
      <div className="cnCardHover" />
      <div className="cnCardIcons">
        <i
          onClick={onLikeClick}
          className={cn(
            `${isLikedByYou ? "fas" : "far"} fa-heart`,
            "cnCardIcon"
          )}
        />
        <span className="cnCardNumber cnCardLikes">{likes}</span>
        <i
          className="fas fa-comment cnCardIcon"
          onClick={() => setIsModalVisible(true)}
        />
        <span className="cnCardNumber">{comments.length}</span>
      </div>
      <PhotoModal
        {...userData}
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        comments={comments}
        commentValue={comment}
        setCommentValue={setComment}
        onCommentSubmit={() => onCommentSubmit(comment)}
        isCommentLoading={isMutateLoading}
        imgUrl={imgUrl}
        isLikedByYou={isLikedByYou}
        onLikeClick={() => onLikeClick(id)}
      />
    </div>
  );
};

export default Card;
