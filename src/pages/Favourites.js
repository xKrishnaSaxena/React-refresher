import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupsList from "../components/meetups/MeetupsList";

function Favourites() {
  const favouriteCtx = useContext(FavouritesContext);
  let content;
  if (favouriteCtx.totalFavourites === 0) {
    content = (
      <h3>
        You got no favourites yet.Add some using the Add to Favourites button 😀
      </h3>
    );
  } else {
    content = <MeetupsList meetups={favouriteCtx.favourites} />;
  }
  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default Favourites;
