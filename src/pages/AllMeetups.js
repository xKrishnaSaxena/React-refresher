import { useState, useEffect } from "react";
import MeetupsList from "../components/meetups/MeetupsList";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-refresher-306fd-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];
        for (const i in data) {
          const meetup = {
            id: i,
            ...data[i],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setloadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupsList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetups;
