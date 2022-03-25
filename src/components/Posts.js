import classes from './Posts.module.css';
import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'ssssangha',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'This is DOPE!',
  },
  {
    id: '1234',
    username: 'ssssangha',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'This is DOPE!',
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
export default Posts;
