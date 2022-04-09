import classes from './Header.module.css';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <div className={classes.mainHeader}>
      <div className={classes.header}>
        <div className={classes['image-container']}>
          <img
            src="https://links.papareact.com/ocw"
            alt="instagram-logo"
            className={classes.image}
          />
        </div>

        <div className={classes['image-container__mobile']}>
          <img
            src="https://links.papareact.com/jjm"
            alt="instagram-logo"
            className={classes.image}
          />
        </div>

        <div className={classes.searchBar}>
          <SearchIcon className={classes['search-icon']} />
          <input type="text" placeholder="Search" />
        </div>
        <div className={classes.iconsContainer}>
          <HomeIcon className={classes.icon} />
          <MenuIcon className={classes.menuIcon} />
          <div className={`${classes.paperIconContainer} ${classes.icon}`}>
            <PaperAirplaneIcon style={{ transform: ' rotate(45deg)' }} />
            <div className={classes.paperNumber}>3</div>
          </div>
          <PlusCircleIcon className={classes.icon} />
          <UserGroupIcon className={classes.icon} />
          <HeartIcon className={classes.icon} />

          <img
            src="https://ocdn.eu/images/pulscms/NjY7MDA_/49a555aecd9586df853c8007a6d5c15d.jpg"
            alt="profile pic"
            className={classes.profilePicture}
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
