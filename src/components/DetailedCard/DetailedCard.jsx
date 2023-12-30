import { useState } from "react";
import Comment from "../Comment/Comment";
import UserBadge from "../UserBadge/UserBadge";
import { nanoid } from "nanoid";
import cn from "classnames";
import "./style.css";
import PhotoModal from "../PhotoModal/PhotoModal";
import TextArea from "../TextArea/TextArea";
import { Bars } from "react-loader-spinner";
import ImageWithLoader from "../ImageWithLoader/ImageWithLoader";

const DetailedCard = ({
  userName,
  avatarUrl,
  userId,
  imgUrl,
  likes,
  isLikedByYou,
  comments,
  className,
  onLikeClick,
  id,
  onCommentSendClick,
  mutateLoading,
}) => {
  const [isCommentsShow, setIsCommentsShow] = useState(false);
  const [comment, setComment] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSendCommentClick = () => {
    if (comment) {
      onCommentSendClick(id, comment);
      setComment("");
    }
  };

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

  const onCloseModal = () => {
    setComment("");
    setIsModalVisible(false);
  };

  const onOpenModal = () => {
    setComment("");
    setIsModalVisible(true);
  };

  return (
    <div className={cn("cnDetailedCardRoot", className)}>
      <div className="cnDetailedCardHeader">
        <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
      </div>
      <div className="">
        <ImageWithLoader className="cnDetailedCardImg" src={imgUrl} alt="img" />
      </div>
      <div className="cnDetailedCardButtons">
        <i
          onClick={() => onLikeClick(id)}
          className={`${
            isLikedByYou ? "fas" : "far"
          } fa-heart cnDetailedCardLikeIcon`}></i>
        <i
          className="fas fa-comment cnDetailedCardLikeComment"
          onClick={onOpenModal}
        />
      </div>
      <div className="cnDetailedCardLikes">{`Оценили ${likes} человек`}</div>
      <div className="cnDetailedCardComments">{renderComments()}</div>
      <TextArea
        placeholder="Введите комментарий"
        value={comment}
        onChange={setComment}
        isLoading={mutateLoading}
        onSubmit={handleSendCommentClick}
        buttonText="Отправить"
      />

      <PhotoModal
        userName={userName}
        avatarUrl={avatarUrl}
        userId={userId}
        isOpen={isModalVisible}
        onClose={onCloseModal}
        comments={comments}
        commentValue={comment}
        setCommentValue={setComment}
        onCommentSubmit={handleSendCommentClick}
        isCommentLoading={mutateLoading}
        imgUrl={imgUrl}
        isLikedByYou={isLikedByYou}
        onLikeClick={() => onLikeClick(id)}
      />
    </div>
  );
};

export default DetailedCard;
