import classes from './Post.module.css';
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.headerContainer}>
        <img src={userImg} alt={`${username} pic`} className={classes.userPicture} />
        <p className={classes.username}>{username}</p>
        <DotsHorizontalIcon className={classes.dotsIcon} />
      </div>

      <img src={img} alt={`${username} img`} className={classes.image} />

      <div className={classes.iconsContainer}>
        <div className={classes.leftIconsContainer}>
          <HeartIcon className={classes.icon} />
          <ChatIcon className={classes.icon} />
          <PaperAirplaneIcon className={classes.icon} />
        </div>
        <div className={classes.rightIconsContainer}>
          <BookmarkIcon className={classes.icon} />
        </div>
      </div>

      <p className={classes.captionContainer}>
        <span>{username} </span> {caption}
      </p>

      <form className={classes.form}>
        <EmojiHappyIcon className={classes.icon} />
        <input type="text" placeholder="Add a comment..." className={classes.commentInput} />
        <button className={classes.commentButton}>Post</button>
      </form>
    </div>
  );
}
export default Post;
