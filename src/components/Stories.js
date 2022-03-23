import { faker } from '@faker-js/faker';
import { useEffect } from 'react';
import { useState } from 'react';
import Story from './Story';
import classes from './Stories.module.css';

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className={classes.storiesContainer}>
      {suggestions.map((profile) => (
        <Story key={profile.id} img={profile.avatar} username={profile.username} />
      ))}
    </div>
  );
}
export default Stories;
