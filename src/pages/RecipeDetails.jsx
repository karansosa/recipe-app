import React from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/RecipeDetails.css'; 

// Static data for recipes
const recipeData = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      cuisine: "Italian",
      image: "https://via.placeholder.com/150",
      description: "Classic Italian pasta dish with creamy sauce and pancetta.",
      ingredients: ["spaghetti", "eggs", "pancetta", "parmesan", "black pepper"],
      steps: [
        "Marinate pork.",
        "Grill the pork.",
        "Assemble tacos with cilantro and pineapple."
      ]
    },
    {
      id: 2,
      title: "Lasagna",
      cuisine: "Italian",
      image: "https://via.placeholder.com/150",
      description: "Layered pasta dish with meat, cheese, and tomato sauce.",
      ingredients: ["lasagna noodles", "beef", "tomato sauce", "cheese", "onion"],
      steps: [
        "Marinate pork.",
        "Grill the pork.",
        "Assemble tacos with cilantro and pineapple."
      ]
    },
    {
      id: 3,
      title: "Margherita Pizza",
      cuisine: "Italian",
      image: "https://via.placeholder.com/150",
      description: "Classic pizza with fresh mozzarella, basil, and tomato sauce.",
      ingredients: ["pizza dough", "tomato sauce", "mozzarella", "basil"],
      steps: [
        "Marinate pork.",
        "Grill the pork.",
        "Assemble tacos with cilantro and pineapple."
      ]
    },
    {
      id: 4,
      title: "Risotto",
      cuisine: "Italian",
      image: "https://via.placeholder.com/150",
      description: "Creamy rice dish with mushrooms and Parmesan cheese.",
      ingredients: ["arborio rice", "mushrooms", "parmesan", "broth"],
      steps: [
        "Marinate pork.",
        "Grill the pork.",
        "Assemble tacos with cilantro and pineapple."
      ]
    },
    {
      id: 5,
      title: "Penne Arrabbiata",
      cuisine: "Italian",
      image: "https://via.placeholder.com/150",
      description: "Spicy pasta with garlic, tomatoes, and red chili.",
      ingredients: ["penne", "tomatoes", "garlic", "chili", "olive oil"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
  
    {
      id: 6,
      title: "Tacos al Pastor",
      cuisine: "Mexican",
      image: "https://via.placeholder.com/150",
      description: "Traditional Mexican street tacos with marinated pork and pineapple.",
      ingredients: ["tortilla", "pork", "pineapple", "cilantro", "onion"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
    {
      id: 7,
      title: "Chili con Carne",
      cuisine: "Mexican",
      image: "https://via.placeholder.com/150",
      description: "Spicy stew with ground beef, beans, and chili peppers.",
      ingredients: ["ground beef", "chili peppers", "beans", "tomatoes"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
    {
      id: 8,
      title: "Enchiladas",
      cuisine: "Mexican",
      image: "https://via.placeholder.com/150",
      description: "Tortillas filled with chicken, cheese, and covered in a chili sauce.",
      ingredients: ["chicken", "cheese", "tortillas", "chili sauce"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
    {
      id: 9,
      title: "Quesadillas",
      cuisine: "Mexican",
      image: "https://via.placeholder.com/150",
      description: "Grilled tortillas with melted cheese and optional fillings.",
      ingredients: ["flour tortillas", "cheese", "chicken", "peppers"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
    {
      id: 10,
      title: "Guacamole",
      cuisine: "Mexican",
      image: "https://via.placeholder.com/150",
      description: "Creamy avocado dip with lime, cilantro, and spices.",
      ingredients: ["avocado", "lime", "cilantro", "tomato", "onion"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
  
    {
      id: 11,
      title: "Chicken Biryani",
      cuisine: "Indian",
      image: "https://via.placeholder.com/150",
      description: "Aromatic rice dish with spiced chicken and saffron.",
      ingredients: ["rice", "chicken", "saffron", "yogurt", "spices"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
    {
      id: 12,
      title: "Butter Chicken",
      cuisine: "Indian",
      image: "https://via.placeholder.com/150",
      description: "Creamy chicken curry with tomatoes and spices.",
      ingredients: ["chicken", "butter", "tomatoes", "cream", "spices"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
    {
      id: 13,
      title: "Aloo Gobi",
      cuisine: "Indian",
      image: "https://via.placeholder.com/150",
      description: "Spicy potato and cauliflower curry.",
      ingredients: ["potatoes", "cauliflower", "spices", "onion"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
    {
      id: 14,
      title: "Samosas",
      cuisine: "Indian",
      image: "https://via.placeholder.com/150",
      description: "Fried pastry filled with spiced potatoes and peas.",
      ingredients: ["potatoes", "peas", "spices", "flour"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
    {
      id: 15,
      title: "Naan",
      cuisine: "Indian",
      image: "https://via.placeholder.com/150",
      description: "Soft, fluffy flatbread.",
      ingredients: ["flour", "yeast", "water", "salt"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
  
    {
      id: 16,
      title: "Chow Mein",
      cuisine: "Chinese",
      image: "https://via.placeholder.com/150",
      description: "Stir-fried noodles with vegetables and soy sauce.",
      ingredients: ["noodles", "soy sauce", "vegetables", "chicken"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
    {
      id: 17,
      title: "Kung Pao Chicken",
      cuisine: "Chinese",
      image: "https://via.placeholder.com/150",
      description: "Stir-fried chicken with peanuts, chili peppers, and soy sauce.",
      ingredients: ["chicken", "peanuts", "soy sauce", "chili peppers"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
    {
      id: 18,
      title: "Sweet and Sour Pork",
      cuisine: "Chinese",
      image: "https://via.placeholder.com/150",
      description: "Pork in a tangy sweet and sour sauce.",
      ingredients: ["pork", "vinegar", "sugar", "pineapple", "bell peppers"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
    {
      id: 19,
      title: "Spring Rolls",
      cuisine: "Chinese",
      image: "https://via.placeholder.com/150",
      description: "Crispy rolls filled with vegetables and meat.",
      ingredients: ["spring roll wrappers", "vegetables", "pork", "shrimp"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
    {
      id: 20,
      title: "Fried Rice",
      cuisine: "Chinese",
      image: "https://via.placeholder.com/150",
      description: "Stir-fried rice with vegetables, eggs, and soy sauce.",
      ingredients: ["rice", "vegetables", "egg", "soy sauce"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
  
    {
      id: 21,
      title: "Pad Thai",
      cuisine: "Thai",
      image: "https://via.placeholder.com/150",
      description: "Stir-fried noodles with shrimp, peanuts, and lime.",
      ingredients: ["rice noodles", "shrimp", "peanuts", "lime", "fish sauce"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
    {
      id: 22,
      title: "Green Curry",
      cuisine: "Thai",
      image: "https://via.placeholder.com/150",
      description: "Spicy green curry with chicken and vegetables.",
      ingredients: ["chicken", "green curry paste", "coconut milk", "vegetables"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
    {
      id: 23,
      title: "Tom Yum Soup",
      cuisine: "Thai",
      image: "https://via.placeholder.com/150",
      description: "Hot and sour soup with shrimp and lemongrass.",
      ingredients: ["shrimp", "lemongrass", "lime", "chili peppers"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
    {
      id: 24,
      title: "Massaman Curry",
      cuisine: "Thai",
      image: "https://via.placeholder.com/150",
      description: "Rich and creamy curry with potatoes, chicken, and peanuts.",
      ingredients: ["chicken", "potatoes", "peanuts", "coconut milk"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    },
    {
      id: 25,
      title: "Mango Sticky Rice",
      cuisine: "Thai",
      image: "https://via.placeholder.com/150",
      description: "Sweet coconut sticky rice with ripe mango.",
      ingredients: ["glutinous rice", "mango", "coconut milk", "sugar"],
      steps: [
      "Marinate pork.",
      "Grill the pork.",
      "Assemble tacos with cilantro and pineapple."
    ]
    }
  ];

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipe = recipeData.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div className="container mt-5">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="img-fluid" />
      <h3>Description</h3>
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;
