import Mountain1 from "../assets/taal1.jpg";
import Mountain2 from "../assets/taal22.jpg";
import Mountain3 from "../assets/swiss1.webp";
import Mountain4 from "../assets/swiss3.jpg";
import "./Destinationstyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Discover the breathtaking Taal Volcano, an iconic gem nestled in the heart of Batangas, Philippines. This active complex volcano, set on Volcano Island within the serene Taal Lake, captivates visitors with its stunning landscapes and rich geological history. Known for its picturesque views and adventurous hiking trails, Taal is perfect for nature enthusiasts and thrill-seekers alike. Experience the unique charm of this natural wonder, where you can embark on scenic boat tours, immerse yourself in local culture, and witness the beauty of one of the country's most active volcanoes. Join us for an unforgettable journey to Taal Volcano, where adventure awaits!"
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Oltschibachfall, switzerland"
        text="Nestled in the picturesque landscapes of Switzerland, Oltschibachfall is a breathtaking waterfall that enchants visitors with its stunning natural beauty. Cascading gracefully down rocky cliffs, the falls create a mesmerizing display of sparkling water, inviting exploration and admiration. Surrounded by lush greenery and dramatic mountain scenery, Oltschibachfall exemplifies Switzerland’s renowned commitment to preserving its natural wonders. The region is not only a visual delight but also a haven for outdoor enthusiasts and photographers alike. With its pristine environment and picturesque charm, Oltschibachfall offers a perfect escape for those seeking adventure or tranquility. Experience the serenity and awe-inspiring vistas that define Switzerland’s breathtaking landscapes, and let Oltschibachfall rejuvenate your spirit and inspire your creativity."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
