import Button from "../Button/Button";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src="https://yahpadsushi.com/images/logo/logo.webp?v=1.06" alt="Yahpad Sushi" className="logo" />
      </div>

      <Button title="Accueil" />
      <Button title="isis" />
      <Button title="alyssa" />
      <Button title="cleo" />
    </div>
  );
}
