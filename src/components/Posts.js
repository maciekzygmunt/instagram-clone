import classes from './Posts.module.css';
import Post from './Post';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';

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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsFaker = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    console.log(postsFaker);

    setPosts(postsFaker);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.avatar}
          img={post.avatar}
          caption={post.address.city}
        />
      ))}
    </div>
  );
}
export default Posts;
