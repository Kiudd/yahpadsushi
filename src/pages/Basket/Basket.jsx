import React from "react";
import { useCart } from "../../Context/CartContext";
import "./Basket.scss";
import PaypalButton from "../../components/Payments/payments";
export default function Basket() {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart();

  return (
    <div className="basket-page">
      <h2>Mon panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} width={50} />
                {item.name} - {item.price.toFixed(2)} € x {item.quantity}
                <button onClick={() => removeFromCart(item.id)}>
                  Retirer un
                </button>
              </li>
            ))}
          </ul>
          <p>
            <strong>Total :</strong> {totalPrice.toFixed(2)} €
          </p>
          <button onClick={clearCart}>Vider le panier</button>
        </>
      )}
      {cartItems.length > 0 && (
        <div className="paypal-wrapper">
          <PaypalButton amount={totalPrice.toFixed(2)} />
        </div>
      )}
    </div>
  );
}
