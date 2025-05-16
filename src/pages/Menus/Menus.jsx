// j'importe React et useState (pour gérer les changements de l'interface)
import React, { useState } from "react";

// On importe useCart, une fonction qui permet d'ajouter des produits au panier
import { useCart } from "../../context/CartContext";

//  j'importe le fichier de styles pour décorer la page
import "./Menus.scss";

// je crée un composant nommé Menus
export default function Menus() {
  // selectedCategory : pour garder la catégorie sélectionnée (exemple: "Plateaux")
  // setSelectedCategory : pour changer de catégorie
  const [selectedCategory, setSelectedCategory] = useState("Plateaux");

  // addToCart est une fonction pour ajouter un produit au panier
  const { addToCart } = useCart();

  // c'est la liste des catégories de plats à afficher comme boutons
  const categories = ["Plateaux", "Nigiri", "Sashimi", "Maki"];

  // c'est la Liste de menus avec leurs infos
  const dummyMenus = [
    {
      id: 1,
      name: "Plateau découverte",
      description:
        "10 California Crispix Dragons Rol, 10 California Concombre Thon Cuit, 10 California Veggi Avocat Cheese, 10 California Saumon Avocat Cheese, 10 Maki Thon",
      price: 25.0,
      image:
        "https://yahpadsushi.com/images/items/plateau_decouverte.webp?v=1.06",
      category: "Plateaux",
    },
    {
      id: 2,
      name: "Plateau Découverte 2.0",
      description:
        "10 Urumakis Veggie (sans algue), 10 California Crispix Dragon Rolls, 10 California Saumon Surimi Cheese, 10 Makis Thon Spicy, 8 Nigiris Saumon / 2 Nigiris Surimi",
      price: 38.0,
      image:
        "https://yahpadsushi.com/images/items/plateau_decouverte_2.webp?v=1.06",
      category: "Plateaux",
    },
    {
      id: 3,
      name: "Nigiri Saumon",
      description: "Nigiri au saumon fondant",
      price: 5.99,
      image: "/images/nigiri1.jpg",
      category: "Nigiri",
    },
    {
      id: 4,
      name: "Nigiri Thon",
      description: "Nigiri au thon frais",
      price: 6.5,
      image: "/images/nigiri2.jpg",
      category: "Nigiri",
    },
    {
      id: 5,
      name: "Sashimi Thon",
      description: "Sashimi frais découpé à la main",
      price: 9.99,
      image: "/images/sashimi1.jpg",
      category: "Sashimi",
    },
    {
      id: 6,
      name: "Sashimi Saumon",
      description: "Sashimi de saumon frais",
      price: 10.5,
      image: "/images/sashimi2.jpg",
      category: "Sashimi",
    },
    {
      id: 7,
      name: "Maki Concombre",
      description: "Maki végétarien au concombre",
      price: 4.5,
      image: "/images/maki1.jpg",
      category: "Maki",
    },
    {
      id: 8,
      name: "Maki Avocat",
      description: "Maki végétarien à l'avocat",
      price: 4.8,
      image: "/images/maki2.jpg",
      category: "Maki",
    },
  ];

  // pour garder les plats de la catégorie choisie
  const filteredMenus = dummyMenus.filter(
    (item) => item.category === selectedCategory
  );

  // On retourne ce qui s'affiche sur la page
  return (
    <div className="menus-page">
      {/* Titre */}
      <h1 className="title">Notre Menu</h1>

      {/* Boutons de la catégorie (Plateaux, Nigiri, etc.) */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat} // clé unique pour chaque bouton
            onClick={() => setSelectedCategory(cat)} // change la catégorie sélectionnée au clic
            className={
              cat === selectedCategory ? "category-btn active" : "category-btn"
            } // si la catégorie est active, on ajoute la classe "active"
          >
            {cat} {/* Affiche le nom de la catégorie */}
          </button>
        ))}
      </div>

      {/* la Liste des plats filtrés par leurs catégorie */}
      <div className="menu-list">
        {filteredMenus.map((item) => (
          <div className="menu-card" key={item.id}>
            {/* Image du plat */}
            <img src={item.image} alt={item.name} className="menu-img" />

            {/* Infos du plat : nom, description, prix, bouton */}
            <div className="menu-info">
              <h2>{item.name}</h2> {/* Nom du plat */}
              <p>{item.description}</p> {/* Description du plat */}
              <div className="price-cart">
                {/*Le prix du plat */}
                <span className="price">{item.price.toFixed(2)} €</span>

                {/* Bouton pour ajouter le plat au panier */}
                <button
                  className="add-btn"
                  onClick={() => addToCart(item)} // ajoute le plat au panier
                  aria-label={`Ajouter ${item.name} au panier`} // lecture de l'écran
                >
                  Ajouter au panier {/* Texte visible dans le bouton */}
                  <span className="btn-underline" />{" "}
                  {/* c'est la ligne en dessous du texte pour décorer le bouton */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
