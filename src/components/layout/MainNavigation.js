import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";
function MainNavigation() {
  const favouriteCtx = useContext(FavouritesContext);
  const numberofFavourites = favouriteCtx.totalFavourites;
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites {numberofFavourites}</Link>
          </li>
          <li>
            <Link to="new-meetup">Add new Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
