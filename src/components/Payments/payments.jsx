import React, { useEffect, useRef } from "react";
import "./Payments.scss";

const PaypalButton = ({ amount }) => {
  const paypalRef = useRef();

  useEffect(() => {
    const scriptId = "paypal-sdk";

    function renderPaypalButton() {
      if (window.paypal && paypalRef.current) {
        // Nettoyer l'ancienne instance
        paypalRef.current.innerHTML = "";

        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount.toString(),
                    },
                  },
                ],
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then((details) => {
                alert(
                  `Paiement effectué avec succès par ${details.payer.name.given_name} !`
                );
              });
            },
            onError: (err) => {
              console.error("PayPal error:", err);
              alert("Une erreur est survenue lors du paiement.");
            },
          })
          .render(paypalRef.current);
      }
    }

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AU9CO76nM46peYUsNZVSqpVBNcL1iAj6vSQZgW4O4kCTTBvdMF1sEJvITlVJEOYFavIBdwYW0Dk7_uPz";
      script.id = scriptId;
      script.async = true;
      script.onload = () => renderPaypalButton();
      document.body.appendChild(script);
    } else {
      renderPaypalButton();
    }
  }, [amount]);

  return <div className="paypal-button-container" ref={paypalRef}></div>;
};

export default PaypalButton;
