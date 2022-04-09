import { useSelector, useDispatch } from 'react-redux';
import classes from './MiniProfile.module.css';
import store from '../store';
import { loginActions } from '../store/login-slice';

function MiniProfile() {
  const email = useSelector((state) => state.login.email);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(loginActions.logout());
  };

  return (
    <div className={classes.mainContainer}>
      <img
        className={classes.miniProfileImage}
        src="https://ocdn.eu/images/pulscms/NjY7MDA_/49a555aecd9586df853c8007a6d5c15d.jpg"
        alt="mini profile pic"
      />
      <div className={classes.infoContainer}>
        <h3 className={classes.username}>{email}</h3>
        <h3 className={classes.helloText}>Welcome to Instagram</h3>
      </div>

      <button onClick={logOutHandler}>Sign out</button>
    </div>
  );
}
export default MiniProfile;
