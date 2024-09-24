import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/beverlyhills1.jpg";
import Trip2 from "../assets/spain1.jpg";
import Trip3 from "../assets/greece1.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps. </p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in California"
          text="California beckons with its dazzling allure. Explore luxurious Beverly Hills, stroll Rodeo Drive, and immerse yourself in Hollywood’s cinematic magic. Experience the ultimate adventure and create unforgettable memories on your dream trip!"
        />
        <TripData
          image={Trip2}
          heading="Trip in Spain"
          text="Spain invites you to discover its vibrant culture and stunning landscapes. Wander through the artistic streets of Barcelona, savor delicious tapas in Madrid, and bask on sun-kissed beaches. Experience unforgettable adventures and create lasting memories in this enchanting destination!"
        />
        <TripData
          image={Trip3}
          heading="Trip in Greece"
          text="Greece offers a captivating blend of history and beauty. Explore ancient ruins in Athens, savor delectable cuisine, and unwind on stunning beaches. Don’t miss the breathtaking sunsets in Santorini, where white-washed buildings meet azure waters. Create unforgettable memories in this enchanting paradise!"
        />
      </div>
    </div>
  );
}

export default Trip;
