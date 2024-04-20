import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
  const favouriteCtx = useContext(FavouritesContext);

  const itemIsFavourite = favouriteCtx.itemIsFavourite(props.id);
  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
      favouriteCtx.removeFavourite(props.id);
    } else {
      favouriteCtx.addFavourite({
        id: props.id,
        title: props.title,
        address: props.address,
        image: props.image,
        description: props.description,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? "Remove from Favourites" : "Add to Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
