import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  const imgArr = [
    "https://media.istockphoto.com/id/1347616560/photo/a-view-of-the-fa%C3%A7ades-of-royce-hall-and-haines-hall-at-university-of-california-los-angeles.jpg?s=612x612&w=0&k=20&c=4vosGBb4ozEBntNcp0cQvk5rNuM_8wYbredw06rchlc=",
    "https://hips.hearstapps.com/hmg-prod/images/berry-college-historic-campus-at-twilight-royalty-free-image-1652127954.jpg?crop=1xw:0.84415xh;center,top&resize=1200:*",
    "https://cdn.britannica.com/03/130603-050-37F7F535/Alliman-Administration-Center-Hesston-College-Mennonite-college.jpg",
    "https://media.istockphoto.com/id/1371896330/photo/happy-asian-woman-in-his-graduation-day.jpg?s=612x612&w=0&k=20&c=Ur3moWl1fKFms-6UACseglMjoYAynYKzsanZpgK8lFk=",
  ];

  return (
    <>
      <div className="animate">
        <Link to="/cources">Latest Courses</Link>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2021/10/11/04/08/university-6699377_640.jpg"
        alt="university-image"
        className="university-image"
      />
      <div className="home-container">
        {imgArr.map((img, index) => (
          <div key={index} className="hero-image">
            <img className="image" src={img} alt="college-image" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
