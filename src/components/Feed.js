import Stories from './Stories';
import classes from './Feed.module.css';
import Posts from './Posts';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';

function Feed() {
  return (
    <main className={classes.main}>
      <section className={classes.mainSection}>
        <Stories />
        <Posts />
      </section>
      <section className={classes.rightSection}>
        <div className={classes.miniSection}>
          <MiniProfile />
          {/* <Suggestions /> */}
        </div>
      </section>
    </main>
  );
}
export default Feed;
