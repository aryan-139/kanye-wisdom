import image from "./ye.jpg";
import "../styles.css";

const Header = () => {
  return (
    <div className="header flex-row">
      <img src={image} alt="kanye west profile" />
      <div>
        <p id="name">ye</p>
        <p id="username">@kanyewest</p>
      </div>
    </div>
  );
};

export default Header;