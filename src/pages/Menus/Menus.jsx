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
  const categories = [
    "Plateaux",
    "Nigiri",
    "Sashimi et Pokeball",
    "Maki",
    "California",
    "Flocon",
    "Salade et brochette",
    "Dessert et boisson",
  ];

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
      name: "Plateau In Love",
      description:
        "10 California Crispix Dragon rolls 10 Makis Concombre 10 California Saumon Cheese 6 Uramki Veggi Avocat Cheese 4 Nigiris Saumon",
      price: 30.0,
      image: "https://yahpadsushi.com/images/items/plateau_in_love.webp?v=1.06",
      category: "Plateaux",
    },
    {
      id: 4,
      name: "Plateau Découverte XXL",
      description:
        "8 California Crispix Dragons Roll, 8 California Avocat Concombre Thon Cuit, 8 California Veggie Avocat Cheese, 8 California Saumon Avocat Cheese, 8 Maki Saumon Cuit",
      price: 35.0,
      image:
        "https://yahpadsushi.com/images/items/plateau_decouverte_xxl.webp?v=1.06",
      category: "Plateaux",
    },
    {
      id: 5,
      name: "Plateau Bateau Premium",
      description:
        "10 California Crispix Dragon Rolls 10 Makis Avocat 10 California Saumon Avocat Cheese 10 Flocon Thon Cuit Concombre 6 Nigiris Saumon",
      price: 45.0,
      image: "https://yahpadsushi.com/images/items/plateau_bateau.webp?v=1.06",
      category: "Plateaux",
    },
    {
      id: 6,
      name: "Plateau full saumon",
      description:
        "10 California Crispix Saumon Concombre\n10 Makis Saumon\n10 California Saumon Avocat Cheese\n10 Flocon Saumon\n8 Nigiris Saumon",
      price: 50.0,
      image:
        "https://yahpadsushi.com/images/items/plateau_full_saumon.webp?v=1.06",
      category: "Plateaux",
    },
    {
      id: 7,
      name: "Nigiri Saumon x2",
      price: 3.0,
      image: "https://yahpadsushi.com/images/items/nigiris_saumon.webp?v=1.06",
      category: "Nigiri",
    },
    {
      id: 8,
      name: "Nigiri Avocat x2",
      price: 2.5,
      image: "https://yahpadsushi.com/images/items/nigiris_avocat.webp?v=1.06",
      category: "Nigiri",
    },
    {
      id: 9,
      name: "Nigiri Surimi x2",
      price: 2.5,
      image: "https://yahpadsushi.com/images/items/nigiris_surimi.webp?v=1.06",
      category: "Nigiri",
    },
    {
      id: 10,
      name: "Pokeball Veggie",
      price: 10.0,
      image: "https://yahpadsushi.com/images/items/pokebowl_veggie.webp?v=1.06",
      category: "Sashimi et Pokeball",
    },
    {
      id: 11,
      name: "Sashimi Saumon x 5",
      price: 6.0,
      image: "https://yahpadsushi.com/images/items/sashimis_saumon.webp?v=1.06",
      category: "Sashimi et Pokeball",
    },
    {
      id: 12,
      name: "Pokeball Saumon crudité",
      price: 11.0,
      image: "https://yahpadsushi.com/images/items/pokebowl_saumon.webp?v=1.06",
      category: "Sashimi et Pokeball",
    },
    {
      id: 13,
      name: "Maki Avocat x 10",
      price: 7.0,
      image: "https://yahpadsushi.com/images/items/maki_avocat.webp?v=1.06",
      category: "Maki",
    },
    {
      id: 14,
      name: "Maki Thon cuit x 10",
      price: 7.0,
      image: "https://yahpadsushi.com/images/items/maki_thon_cuit.webp?v=1.06",
      category: "Maki",
    },
    {
      id: 15,
      name: "Maki Surimi x 10",
      price: 7.0,
      image: "https://yahpadsushi.com/images/items/maki_surimi.webp?v=1.06",
      category: "Maki",
    },
    {
      id: 16,
      name: "Maki Saumon x 10",
      price: 8.0,
      image: "https://yahpadsushi.com/images/items/maki_saumon.webp?v=1.06",
      category: "Maki",
    },
    {
      id: 17,
      name: "Maki cheese x 10",
      price: 7.0,
      image: "https://yahpadsushi.com/images/items/maki_cheese.webp?v=1.06",
      category: "Maki",
    },
    {
      id: 18,
      name: "Maki Saumon cheese x 10",
      price: 8.5,
      image:
        "https://yahpadsushi.com/images/items/maki_saumon_cheese.webp?v=1.06",
      category: "Maki",
    },
    {
      id: 19,
      name: "Maki avocat cheese x 10",
      price: 8.0,
      image:
        "https://yahpadsushi.com/images/items/maki_avocat_cheese.webp?v=1.06",
      category: "Maki",
    },
    {
      id: 20,
      name: "Maki concombre cheese x 10",
      price: 8.0,
      image:
        "https://yahpadsushi.com/images/items/maki_concombre_cheese.webp?v=1.06",
      category: "Maki",
    },
    {
      id: 21,
      name: "Maki surimi cheesex 10",
      price: 8.0,
      image:
        "https://yahpadsushi.com/images/items/maki_surimi_cheese.webp?v=1.06",
      category: "Maki",
    },
    {
      id: 22,
      name: "Maki saumon cuit x 10",
      price: 7.0,
      image:
        "https://yahpadsushi.com/images/items/maki_saumon_cuit.webp?v=1.06",
      category: "Maki",
    },
    {
      id: 23,
      name: "Flocon saumon x 10",
      price: 8.0,
      image: "https://yahpadsushi.com/images/items/flocon_saumon.webp?v=1.06",
      category: "Flocon",
    },
    {
      id: 24,
      name: "Flocon thon cuit x 10",
      price: 7.5,
      image:
        "https://yahpadsushi.com/images/items/flocon_thon_cuit.webp?v=1.06",
      category: "Flocon",
    },
    {
      id: 26,
      name: "Flocon avocat x 10",
      price: 7.0,
      image: "https://yahpadsushi.com/images/items/flocon_avocat.webp?v=1.06",
      category: "Flocon",
    },
    {
      id: 27,
      name: "Flocon surimi x 10",
      price: 7.0,
      image: "https://yahpadsushi.com/images/items/flocon_surimi.webp?v=1.06",
      category: "Flocon",
    },
    {
      id: 28,
      name: "Salade Chou",
      price: 3.0,
      image: "https://yahpadsushi.com/images/items/salade_chou.webp?v=1.06",
      category: "Salade et brochette",
    },
    {
      id: 29,
      name: "Riz vinaigré",
      price: 2.5,
      image: "https://yahpadsushi.com/images/items/riz_vinaigre.webp?v=1.06",
      category: "Salade et brochette",
    },
    {
      id: 30,
      name: "Brochette boeuf cheese",
      price: 2.0,
      image:
        "https://yahpadsushi.com/images/items/brochette_boeuf_cheese.webp?v=1.06",
      category: "Salade et brochette",
    },
    {
      id: 31,
      name: "Flocon Nutella x 10",
      price: 8.0,
      image: "https://yahpadsushi.com/images/items/flocon_nutella.webp?v=1.06",
      category: "Dessert et boisson",
    },
    {
      id: 32,
      name: "Mochi x 3",
      price: 6.0,
      image: "https://yahpadsushi.com/images/items/mochi.webp?v=1.06",
      category: "Dessert et boisson",
    },
    {
      id: 33,
      name: "Coca-cola 33cl",
      price: 2.0,
      image: "https://yahpadsushi.com/images/items/coca_cola.webp?v=1.06",
      category: "Dessert et boisson",
    },
    {
      id: 36,
      name: "Cali. Crispix Concombre Thon Cuit x 10",
      price: 8.0,
      image:
        "https://yahpadsushi.com/images/items/california_crispix_concombre_thon_cuit.webp?v=1.06",
      category: "California",
    },
    {
      id: 37,
      name: "Cali. Thon Cuit Concombre x 10",
      price: 8.0,
      image:
        "https://yahpadsushi.com/images/items/california_thon_cuit_concombre.webp?v=1.06",
      category: "California",
    },
    {
      id: 38,
      name: "Cali. Thon cuit avocat x 10",
      price: 8.0,
      image:
        "https://yahpadsushi.com/images/items/california_thon_cuit_avocat.webp?v=1.06",
      category: "California",
    },
    {
      id: 39,
      name: "Cali. Veggie x 10",
      price: 8.0,
      image:
        "https://yahpadsushi.com/images/items/california_veggie.webp?v=1.06",
      category: "California",
    },
    {
      id: 40,
      name: "Cali. surimi avocat x 10",
      price: 8.0,
      image:
        "https://yahpadsushi.com/images/items/california_avocat_surimi.webp?v=1.06",
      category: "California",
    },
    {
      id: 41,
      name: "Cali.  avocat concombre surimi x 10",
      price: 8.0,
      image:
        "https://yahpadsushi.com/images/items/california_concombre_surimi.webp?v=1.06",
      category: "California",
    },
    {
      id: 42,
      name: "Cali. concombre cheese x 10",
      price: 9.0,
      image:
        "https://yahpadsushi.com/images/items/california_concombre_cheese.webp?v=1.06",
      category: "California",
    },
    {
      id: 43,
      name: "Cali. avocat cheese x 10",
      price: 8.5,
      image:
        "https://yahpadsushi.com/images/items/california_avocat_cheese.webp?v=1.06",
      category: "California",
    },
    {
      id: 44,
      name: "Cali. crispit avocat cheese x 10",
      price: 8.0,
      image:
        "https://yahpadsushi.com/images/items/california_crispix_concombre_avocat_cheese.webp?v=1.06",
      category: "California",
    },
    {
      id: 45,
      name: "Cali. saumon avocat x 10",
      price: 9.0,
      image:
        "https://yahpadsushi.com/images/items/california_saumon_avocat.webp?v=1.06",
      category: "California",
    },
    {
      id: 46,
      name: "Cali. crispit concombre surimi x 10",
      price: 8.0,
      image:
        "https://yahpadsushi.com/images/items/california_crispix_concombre_surimi.webp?v=1.06",
      category: "California",
    },
    {
      id: 47,
      name: "Cali. crispit saumon avocat x 10",
      price: 9.0,
      image:
        "https://yahpadsushi.com/images/items/california_crispix_avocat_saumon.webp?v=1.06",
      category: "California",
    },
    {
      id: 48,
      name: "Cali. crispit avocat thon cuit x 10",
      price: 8.5,
      image:
        "https://yahpadsushi.com/images/items/california_crispix_avocat_thon_cuit.webp?v=1.06",
      category: "California",
    },
    {
      id: 49,
      name: "Cali. crispix avocat cheese  x 10",
      price: 8.0,
      image:
        "https://yahpadsushi.com/images/items/california_crispix_avocat_cheese.webp?v=1.06",
      category: "California",
    },
    {
      id: 50,
      name: "Cali. saumon concombre x 10",
      price: 9.0,
      image:
        "https://yahpadsushi.com/images/items/california_saumon_concombre.webp?v=1.06",
      category: "California",
    },
    {
      id: 51,
      name: "Cali. crispit saumon surimi x 10",
      price: 9.0,
      image:
        "https://yahpadsushi.com/images/items/california_saumon_surimi.webp?v=1.06",
      category: "California",
    },
    {
      id: 52,
      name: "Cali. saumon cheese x 10",
      price: 9.0,
      image:
        "https://yahpadsushi.com/images/items/california_saumon_cheese.webp?v=1.06",
      category: "California",
    },
    {
      id: 53,
      name: "Cali. saumon avocat cheese x 10",
      price: 9.0,
      image:
        "https://yahpadsushi.com/images/items/california_saumon_avocat_cheese.webp?v=1.06",
      category: "California",
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
      <h1 className="hero-title">Notre Menus</h1>
      <div className="hero-underline"></div>

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
