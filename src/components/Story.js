import classes from './Story.module.css';

function Story({ img, username }) {
  return (
    <div>
      <img className={classes.image} src={img} alt="" />
      <p className={classes.username}>{username}</p>
    </div>
  );
}
export default Story;
