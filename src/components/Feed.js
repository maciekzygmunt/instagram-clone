import Stories from './Stories';
import classes from './Feed.module.css';
import Posts from './Posts';

function Feed() {
  return (
    <main className={classes.main}>
      <section className={classes.mainSection}>
        <Stories />
        <Posts />
      </section>
      <section></section>
    </main>
  );
}
export default Feed;
