import React, { useState } from "react";
import { motion } from "framer-motion";
import "./History.scss";

const sections = [
  {
    id: "inspiration",
    label: "Inspiration",
    title: "L'inspiration japonaise au cœur du Sud",
    text: "Chaque aventure commence quelque part. Pour nous, tout est parti d’une fascination profonde pour le Japon – sa culture, sa rigueur, sa cuisine. Depuis tout jeune, j’étais captivé par l’art du sushi : cette précision dans le geste, la minutie du roulage, et même l’idée que la découpe du poisson pouvait transformer le goût d’une bouchée. C’est cette passion pour l’excellence et la beauté dans la simplicité qui nous a guidés à créer des sushis fondés sur des produits de qualité, ici dans le Sud.",
    image:
      "https://www.aquitaineonline.com/images/stories/Occitanie/perpignan_01.jpg",
  },
  {
    id: "passion",
    label: "Passion",
    title: "Un chef catalan passionné d'Asie",
    text: "Né à Perpignan, je suis catalan de cœur, mais ma passion m’a toujours porté bien plus loin. La culture asiatique – et tout particulièrement la cuisine japonaise – m’a appris à allier discipline, raffinement et émotion dans chaque création culinaire. C’est cette passion qui donne vie à chacun de nos plats.",
    image:
      "https://www.carrementbelle.com/blog/wp-content/uploads/2020/02/parfum-asie.jpg",
  },
  {
    id: "maitrise",
    label: "Maîtrise",
    title: "L'art du sushi maîtrisé à la perfection",
    text: "Au fil des années, j’ai perfectionné les techniques traditionnelles japonaises. Chaque geste compte : le roulage précis des makis, la découpe millimétrée du poisson, ou encore l’équilibre subtil entre le riz, le vinaigre et la garniture. La maîtrise, ce n’est pas juste un savoir-faire, c’est un engagement quotidien pour offrir le meilleur.",
    image:
      "https://static.wixstatic.com/media/f4c7c5_94aea18a467c40a8acd1de917bb29ea4~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/f4c7c5_94aea18a467c40a8acd1de917bb29ea4~mv2.jpg",
  },
  {
    id: "transmission",
    label: "Transmission",
    title: "Une passion partagée à Perpignan",
    text: "Aujourd’hui, cette passion se vit et se partage à Perpignan. À travers notre cuisine, nous racontons une histoire, un pont entre deux cultures. Chaque plat est une rencontre entre le Sud et l’Extrême-Orient, entre authenticité et exigence. C’est une invitation à découvrir, à savourer et à voyager.",
    image: "https://yahpadsushi.com/images/opengraph.png",
  },
];

const NotreHistoire = () => {
  const [activeId, setActiveId] = useState("inspiration");
  const activeSection = sections.find((s) => s.id === activeId);

  return (
    <section className="history-page">
      <div className="overlay" />

      <div className="history-header-row">
        <div className="header-history">
          <h1 className="header-title">Notre Histoire</h1>
          <div className="header-underline"></div>
        </div>

        <div className="categories">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`category-btn ${
                activeId === section.id ? "active" : ""
              }`}
              onClick={() => setActiveId(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="history-content"
        key={activeSection.id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="history-text">
          <h2>{activeSection.title}</h2>
          <p>{activeSection.text}</p>
        </div>
        <div className="history-image">
          <img src={activeSection.image} alt={activeSection.id} />
        </div>
      </motion.div>
    </section>
  );
};

export default NotreHistoire;
