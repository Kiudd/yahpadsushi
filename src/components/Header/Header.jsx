import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext"; // <-- Ajoute cet import
import "./Header.scss";

export default function Header() {
  const { totalItems } = useCart(); // <-- Place ceci AVANT le return

  return (
    <div className="header-container">
      <div className="logo-and-buttons">
        <div className="logo-container">
          <img
            src="https://yahpadsushi.com/images/logo/logo.webp?v=1.06"
            alt="Yahpad Sushi"
            className="logo"
          />
        </div>
        <div className="button-group">
          <Button title="Accueil" href="/" />
          <Button title="menus" href="/menus" />
          <Button title="histoire" href="/histoire" />
          <Button title="Où Nous trouver ?" href="/commander" />
        </div>
        <div className="cart-icon">
          <Link to="/Basket" aria-label="Voir le panier">
            <i className="fas fa-shopping-cart"></i>
            {totalItems > 0 && (
              <span className="basket-count">{totalItems}</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
