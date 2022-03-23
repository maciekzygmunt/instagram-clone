import Stories from './Stories';
import classes from './Feed.module.css';

function Feed() {
  return (
    <main className={classes.main}>
      <section className={classes.mainSection}>
        <Stories />
      </section>
      <section></section>
    </main>
  );
}
export default Feed;
