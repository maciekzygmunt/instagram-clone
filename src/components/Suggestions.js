import classes from './Suggestions.module.css';
import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.infoContainer}>
        <h3>Suggestions for you</h3>
        <button>See All</button>
      </div>
      {suggestions.map((profile) => (
        <div key={profile.id} className={classes.profileContainer}>
          <img src={profile.avatar} alt="profile pic" />

          <div className={classes.profileInfoContainer}>
            <h2>{profile.username}</h2>
            <h3>Works at {profile.company.name}</h3>
          </div>

          <button className={classes.followButton}>Follow</button>
        </div>
      ))}
    </div>
  );
}
export default Suggestions;
