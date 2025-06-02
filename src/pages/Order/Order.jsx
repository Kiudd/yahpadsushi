import React from "react";
import "./Order.scss";

const Map = () => {
  return (
    <section className="map-page">
      <div className="map-header">
        <h1>Nous Trouver</h1>
        <div className="header-underline"></div>
      </div>

      <div className="map-iframe-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2932.1529063376943!2d2.9455220000000004!3d42.700483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sfr!2sfr!4v1748851422012!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation sur Google Maps"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
