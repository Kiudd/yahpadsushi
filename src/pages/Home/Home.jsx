import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home-wrapper">
      {/* Vidéo de fond */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/videos/sushissss.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo HTML5.
        </video>
      </div>

      {/* Contenu principal */}
      <div className="home-content">
        <header className="hero">
          <h1 className="hero-title">Bienvenue chez Yahpadsushi</h1>
          <div className="hero-underline"></div>
          <Link to="https://yahpadsushi.com" className="hero-button">
            Venez commander !
          </Link>
        </header>

        <section className="testimonials">
          <h2>Avis de nos clients</h2>
          <div className="testimonial-list">
            <blockquote>
              <p>"Merci Sushidrive Perpignan, un régal !"</p>
              <cite>Leatitia</cite>
            </blockquote>
            <blockquote>
              <p>
                "Petit repas d'anniversaire avec mon chéri, on se régale avec
                Sushi Drive Perpignan"
              </p>
              <cite>- Agnès</cite>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
}
