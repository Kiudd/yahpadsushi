import React, { useState } from "react";
import { motion } from "framer-motion";
import "./History.scss";

const sections = [
  {
    id: "inspiration",
    label: "Inspiration",
    title: "L'inspiration japonaise au cœur du Sud",
    text: "Bienvenue dans notre univers, où la rigueur de la cuisine japonaise rencontre la chaleur du Sud de la France.",
    image:
      "https://www.aquitaineonline.com/images/stories/Occitanie/perpignan_01.jpg",
  },
  {
    id: "passion",
    label: "Passion",
    title: "Un chef catalan passionné d'Asie",
    text: "Originaire de Perpignan, notre chef est catalan de naissance et passionné de culture asiatique.",
    image:
      "https://www.carrementbelle.com/blog/wp-content/uploads/2020/02/parfum-asie.jpg",
  },
  {
    id: "maitrise",
    label: "Maîtrise",
    title: "L'art du sushi maîtrisé à la perfection",
    text: "Il a appris à maîtriser les techniques japonaises avec précision : roulage des makis, découpe du poisson, dosage du riz.",
    image:
      "https://static.wixstatic.com/media/f4c7c5_94aea18a467c40a8acd1de917bb29ea4~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/f4c7c5_94aea18a467c40a8acd1de917bb29ea4~mv2.jpg",
  },
  {
    id: "transmission",
    label: "Transmission",
    title: "Une passion partagée à Perpignan",
    text: "Aujourd’hui, il partage cette passion à Perpignan, à travers une cuisine sincère, où les cultures se rencontrent autour du goût et de l’exigence.",
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
