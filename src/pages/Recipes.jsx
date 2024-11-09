import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Static data for recipes
const recipeData = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    cuisine: "Italian",
    image: "https://via.placeholder.com/150",
    description: "Classic Italian pasta dish with creamy sauce and pancetta.",
    ingredients: ["spaghetti", "eggs", "pancetta", "parmesan", "black pepper"]
  },
  {
    id: 2,
    title: "Lasagna",
    cuisine: "Italian",
    image: "https://via.placeholder.com/150",
    description: "Layered pasta dish with meat, cheese, and tomato sauce.",
    ingredients: ["lasagna noodles", "beef", "tomato sauce", "cheese", "onion"]
  },
  {
    id: 3,
    title: "Margherita Pizza",
    cuisine: "Italian",
    image: "https://via.placeholder.com/150",
    description: "Classic pizza with fresh mozzarella, basil, and tomato sauce.",
    ingredients: ["pizza dough", "tomato sauce", "mozzarella", "basil"]
  },
  {
    id: 4,
    title: "Risotto",
    cuisine: "Italian",
    image: "https://via.placeholder.com/150",
    description: "Creamy rice dish with mushrooms and Parmesan cheese.",
    ingredients: ["arborio rice", "mushrooms", "parmesan", "broth"]
  },
  {
    id: 5,
    title: "Penne Arrabbiata",
    cuisine: "Italian",
    image: "https://via.placeholder.com/150",
    description: "Spicy pasta with garlic, tomatoes, and red chili.",
    ingredients: ["penne", "tomatoes", "garlic", "chili", "olive oil"]
  },

  {
    id: 6,
    title: "Tacos al Pastor",
    cuisine: "Mexican",
    image: "https://via.placeholder.com/150",
    description: "Traditional Mexican street tacos with marinated pork and pineapple.",
    ingredients: ["tortilla", "pork", "pineapple", "cilantro", "onion"]
  },
  {
    id: 7,
    title: "Chili con Carne",
    cuisine: "Mexican",
    image: "https://via.placeholder.com/150",
    description: "Spicy stew with ground beef, beans, and chili peppers.",
    ingredients: ["ground beef", "chili peppers", "beans", "tomatoes"]
  },
  {
    id: 8,
    title: "Enchiladas",
    cuisine: "Mexican",
    image: "https://via.placeholder.com/150",
    description: "Tortillas filled with chicken, cheese, and covered in a chili sauce.",
    ingredients: ["chicken", "cheese", "tortillas", "chili sauce"]
  },
  {
    id: 9,
    title: "Quesadillas",
    cuisine: "Mexican",
    image: "https://via.placeholder.com/150",
    description: "Grilled tortillas with melted cheese and optional fillings.",
    ingredients: ["flour tortillas", "cheese", "chicken", "peppers"]
  },
  {
    id: 10,
    title: "Guacamole",
    cuisine: "Mexican",
    image: "https://via.placeholder.com/150",
    description: "Creamy avocado dip with lime, cilantro, and spices.",
    ingredients: ["avocado", "lime", "cilantro", "tomato", "onion"]
  },

  {
    id: 11,
    title: "Chicken Biryani",
    cuisine: "Indian",
    image: "https://via.placeholder.com/150",
    description: "Aromatic rice dish with spiced chicken and saffron.",
    ingredients: ["rice", "chicken", "saffron", "yogurt", "spices"]
  },
  {
    id: 12,
    title: "Butter Chicken",
    cuisine: "Indian",
    image: "https://via.placeholder.com/150",
    description: "Creamy chicken curry with tomatoes and spices.",
    ingredients: ["chicken", "butter", "tomatoes", "cream", "spices"]
  },
  {
    id: 13,
    title: "Aloo Gobi",
    cuisine: "Indian",
    image: "https://via.placeholder.com/150",
    description: "Spicy potato and cauliflower curry.",
    ingredients: ["potatoes", "cauliflower", "spices", "onion"]
  },
  {
    id: 14,
    title: "Samosas",
    cuisine: "Indian",
    image: "https://via.placeholder.com/150",
    description: "Fried pastry filled with spiced potatoes and peas.",
    ingredients: ["potatoes", "peas", "spices", "flour"]
  },
  {
    id: 15,
    title: "Naan",
    cuisine: "Indian",
    image: "https://via.placeholder.com/150",
    description: "Soft, fluffy flatbread.",
    ingredients: ["flour", "yeast", "water", "salt"]
  },

  {
    id: 16,
    title: "Chow Mein",
    cuisine: "Chinese",
    image: "https://via.placeholder.com/150",
    description: "Stir-fried noodles with vegetables and soy sauce.",
    ingredients: ["noodles", "soy sauce", "vegetables", "chicken"]
  },
  {
    id: 17,
    title: "Kung Pao Chicken",
    cuisine: "Chinese",
    image: "https://via.placeholder.com/150",
    description: "Stir-fried chicken with peanuts, chili peppers, and soy sauce.",
    ingredients: ["chicken", "peanuts", "soy sauce", "chili peppers"]
  },
  {
    id: 18,
    title: "Sweet and Sour Pork",
    cuisine: "Chinese",
    image: "https://via.placeholder.com/150",
    description: "Pork in a tangy sweet and sour sauce.",
    ingredients: ["pork", "vinegar", "sugar", "pineapple", "bell peppers"]
  },
  {
    id: 19,
    title: "Spring Rolls",
    cuisine: "Chinese",
    image: "https://via.placeholder.com/150",
    description: "Crispy rolls filled with vegetables and meat.",
    ingredients: ["spring roll wrappers", "vegetables", "pork", "shrimp"]
  },
  {
    id: 20,
    title: "Fried Rice",
    cuisine: "Chinese",
    image: "https://via.placeholder.com/150",
    description: "Stir-fried rice with vegetables, eggs, and soy sauce.",
    ingredients: ["rice", "vegetables", "egg", "soy sauce"]
  },

  {
    id: 21,
    title: "Pad Thai",
    cuisine: "Thai",
    image: "https://via.placeholder.com/150",
    description: "Stir-fried noodles with shrimp, peanuts, and lime.",
    ingredients: ["rice noodles", "shrimp", "peanuts", "lime", "fish sauce"]
  },
  {
    id: 22,
    title: "Green Curry",
    cuisine: "Thai",
    image: "https://via.placeholder.com/150",
    description: "Spicy green curry with chicken and vegetables.",
    ingredients: ["chicken", "green curry paste", "coconut milk", "vegetables"]
  },
  {
    id: 23,
    title: "Tom Yum Soup",
    cuisine: "Thai",
    image: "https://via.placeholder.com/150",
    description: "Hot and sour soup with shrimp and lemongrass.",
    ingredients: ["shrimp", "lemongrass", "lime", "chili peppers"]
  },
  {
    id: 24,
    title: "Massaman Curry",
    cuisine: "Thai",
    image: "https://via.placeholder.com/150",
    description: "Rich and creamy curry with potatoes, chicken, and peanuts.",
    ingredients: ["chicken", "potatoes", "peanuts", "coconut milk"]
  },
  {
    id: 25,
    title: "Mango Sticky Rice",
    cuisine: "Thai",
    image: "https://via.placeholder.com/150",
    description: "Sweet coconut sticky rice with ripe mango.",
    ingredients: ["glutinous rice", "mango", "coconut milk", "sugar"]
  }
];


function Recipes() {
  const { cuisineType } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // Filter recipes by cuisine type
  useEffect(() => {
    const filtered = recipeData.filter(
      (recipe) => recipe.cuisine.toLowerCase() === cuisineType.toLowerCase()
    );
    setFilteredRecipes(filtered);
  }, [cuisineType]);

  // Filter recipes based on search query
  useEffect(() => {
    const filtered = recipeData.filter(
      (recipe) =>
        recipe.cuisine.toLowerCase() === cuisineType.toLowerCase() &&
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }, [searchQuery, cuisineType]);

  return (
    <div className="container mt-5">
      <h1>{cuisineType.toUpperCase()} Recipes</h1>

      {/* Search bar for filtering recipes */}
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="form-control my-3"
      />

      <div className="row">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-3">
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}>
                <div className="card h-100">
                  <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5> <br />
                    <p className="card-text text-center">{recipe.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No recipes found for this cuisine.</p>
        )}
      </div>
    </div>
  );
}

export default Recipes;
