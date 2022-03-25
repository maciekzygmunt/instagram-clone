import classes from './MiniProfile.module.css';

function MiniProfile() {
  return (
    <div className={classes.mainContainer}>
      <img
        className={classes.miniProfileImage}
        src="https://links.papareact.com/3ke"
        alt="mini profile pic"
      />
      <div>
        <h3 className={classes.username}>sssangha</h3>
        <h3 className={classes.helloText}>Welcome to Instagram</h3>
      </div>

      <button>Sign out</button>
    </div>
  );
}
export default MiniProfile;
