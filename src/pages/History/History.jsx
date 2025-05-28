import React from "react";
import "./History.scss";
import { motion } from "framer-motion";

const sections = [
  {
    title: "L'inspiration japonaise au cœur du Sud",
    text: "Bienvenue dans notre univers, où la rigueur de la cuisine japonaise rencontre la chaleur du Sud de la France.",
    image:
      "https://www.aquitaineonline.com/images/stories/Occitanie/perpignan_01.jpg",
  },
  {
    title: "Un chef catalan passionné d'Asie",
    text: "Originaire de Perpignan, notre chef est catalan de naissance et passionné de culture asiatique.",
    image:
      "https://www.carrementbelle.com/blog/wp-content/uploads/2020/02/parfum-asie.jpg",
  },
  {
    title: "L'art du sushi maîtrisé à la perfection",
    text: "Il a appris à maîtriser les techniques japonaises avec précision : roulage des makis, découpe du poisson, dosage du riz.",
    image:
      "https://static.wixstatic.com/media/f4c7c5_94aea18a467c40a8acd1de917bb29ea4~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/f4c7c5_94aea18a467c40a8acd1de917bb29ea4~mv2.jpg",
  },
  {
    title: "Une passion partagée à Perpignan",
    text: "Aujourd’hui, il partage cette passion à Perpignan, à travers une cuisine sincère, où les cultures se rencontrent autour du goût et de l’exigence.",
    image: "https://yahpadsushi.com/images/opengraph.png",
  },
];

const NotreHistoire = () => {
  const backgroundUrl =
    "https://i0.wp.com/blog.mappy.com/wp-content/uploads/2023/04/10d77-istock-1125337399_blog.png?fit=1100%2C500&ssl=1";

  return (
    <section
      className="history-wrapper"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="overlay"></div>

      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Notre Histoire
        <span className="underline" />
      </motion.h1>

      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="history-block"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="history-card">
            <motion.div
              className="card-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </motion.div>

            <motion.div
              className="card-image"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img src={section.image} alt={`illustration-${index}`} />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default NotreHistoire;
