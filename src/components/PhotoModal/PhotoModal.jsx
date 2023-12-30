import { useEffect } from "react";
import UserBadge from "../UserBadge/UserBadge";
import "./style.css";
import Modal from "react-modal";
import Comment from "../Comment/Comment";
import TextArea from "../TextArea/TextArea";
import { nanoid } from "nanoid";
import ImageWithLoader from "../ImageWithLoader/ImageWithLoader";

const PhotoModal = ({
  isOpen,
  onClose,
  imgUrl,
  userName,
  avatarUrl,
  userId,
  comments,
  commentValue,
  setCommentValue,
  onCommentSubmit,
  isCommentLoading,
  isLikedByYou,
  onLikeClick,
}) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body.classList.add("cnBodyOverflow");
    } else {
      body.classList.remove("cnBodyOverflow");
    }
  }, [isOpen]);

  return (
    <Modal
      onRequestClose={onClose}
      isOpen={isOpen}
      className="cnModal"
      overlayClassName="cnModalOverlay"
      ariaHideApp={false}>
      <div className="cnModalRoot">
        <div className="cnModalImgWrapper">
          <ImageWithLoader className="cnModalImg" src={imgUrl} alt="img" />
        </div>
        <div className="cnModalCommentsBlock">
          <div>
            <div className="cnModalHeader">
              <UserBadge
                nickName={userName}
                avatarUrl={avatarUrl}
                id={userId}
              />
            </div>
            <div className="cnModalComments">
              {comments.map((comment) => (
                <Comment {...comment} key={nanoid()} />
              ))}
            </div>
          </div>
          <div className="">
            <div className="cnModalIcons">
              <i
                onClick={onLikeClick}
                className={`${
                  isLikedByYou ? "fa" : "far"
                } fa-heart cnModalLikeIcon`}
              />
            </div>
            <TextArea
              placeholder="Введите комментарий"
              value={commentValue}
              onChange={setCommentValue}
              buttonText="Отправить"
              onSubmit={onCommentSubmit}
              isLoading={isCommentLoading}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PhotoModal;
