import React from "react"; // Importe React pour utiliser JSX et créer des composants
import { Link } from "react-router-dom"; // Importe Link pour navigation interne
import "./Home.scss"; // Importe les styles du composant

export default function Home() {
  return (
    <div className="home-wrapper">
      {" "}
      {/* Conteneur principal de la page */}
      <div className="video-background">
        {" "}
        {/* Conteneur de la vidéo de fond */}
        <video autoPlay loop muted>
          {" "}
          {/* Vidéo qui se joue automatiquement, en boucle et sans son */}
          <source src="/vidéos/sushi.mp4" type="video/mp4" />{" "}
          {/* Source de la vidéo */}
        </video>
      </div>
      <div className="home-content">
        {" "}
        {/* Contenu principal visible au-dessus de la vidéo */}
        <header className="hero">
          {" "}
          {/* Section d'introduction */}
          <h1 className="hero-title">Bienvenue chez Yahpadsushi</h1>
          <div className="hero-underline"></div>
          {/* Titre principal */}
          <Link to="https://yahpadsushi.com" className="hero-button">
            {" "}
            {/* Lien vers le site externe */}
            Venez commandez !
          </Link>
        </header>
        <section className="features">
          {" "}
          {/* Section présentant les fonctionnalités */}
        </section>
        <section className="testimonials">
          {" "}
          {/* Section avis clients */}
          <h2>Avis de nos clients</h2> {/* Titre section */}
          <div className="testimonial-list">
            {" "}
            {/* Liste des témoignages */}
            <blockquote>
              {" "}
              {/* Témoignage 1 */}
              <p>"Merci Sushidrive perpignan un régal !"</p> {/* Texte */}
              <cite>Leatitia</cite> {/* Auteur */}
            </blockquote>
            <blockquote>
              {" "}
              {/* Témoignage 2 */}
              <p>
                "Petit repas d'anniversaire avec mon chéri, on se régal avec
                sushi drive perpignan"
              </p>
              <cite>- Agnès</cite>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
}
