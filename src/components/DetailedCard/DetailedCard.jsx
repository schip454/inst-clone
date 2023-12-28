import { useState } from "react";
import Comment from "../Comment/Comment";
import UserBadge from "../UserBadge/UserBadge";
import { nanoid } from "nanoid";
import cn from "classnames";
import "./style.css";

const DetailedCard = ({
  userName,
  avatarUrl,
  userId,
  imgUrl,
  likes,
  isLikedByYou,
  comments,
  className,
}) => {
  const [isCommentsShow, setIsCommentsShow] = useState(false);

  const renderComments = () => {
    if (comments.length > 2 && !isCommentsShow) {
      const commentsCopy = [...comments];
      const commentsForRender = commentsCopy.splice(comments.length - 2, 2);

      return (
        <>
          <span
            className="cnDetailedCardCommentTitle"
            onClick={() => setIsCommentsShow(true)}>{`Показать еще ${
            comments.length - commentsForRender.length
          } комментариев`}</span>

          {commentsForRender.map((comment) => (
            <Comment {...comment} key={nanoid()} />
          ))}
        </>
      );
    }

    return comments.map((comment) => <Comment {...comment} key={nanoid()} />);
  };
  return (
    <div className={cn("cnDetailedCardRoot", className)}>
      <div className="cnDetailedCardHeader">
        <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
      </div>
      <div className="">
        <img className="cnDetailedCardImg" src={imgUrl} alt="img" />
      </div>
      <div className="cnDetailedCardButtons">
        <i
          className={`${
            isLikedByYou ? "fas" : "far"
          } fa-heart cnDetailedCardLikeIcon`}></i>
        <i className="fas fa-comment cnDetailedCardLikeComment" />
      </div>
      <div className="cnDetailedCardLikes">{`Оценили ${likes} человек`}</div>
      <div className="cnDetailedCardComments">{renderComments()}</div>
      <textarea className="cnDetailedCardTextArea"></textarea>
    </div>
  );
};

export default DetailedCard;
