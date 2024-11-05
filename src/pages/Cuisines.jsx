import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Cuisines() {
  const { cuisineType } = useParams(); // gets the cuisine type from the URL
  const [recipes, setRecipes] = useState([]); // state to store the list of recipes
  const [searchQuery, setSearchQuery] = useState(""); // state for search filter
  const [filteredRecipes, setFilteredRecipes] = useState([]); // state for filtered recipes

  // Fetch recipes from the API based on cuisine type
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`http://localhost:5173/recipes`);
        const data = await response.json();
        
        // Filter recipes by selected cuisine type
        const filtered = data.recipes.filter(
          (recipe) => recipe.cuisine.toLowerCase() === cuisineType.toLowerCase()
        );
        
        setRecipes(filtered);
        setFilteredRecipes(filtered); // initialize filteredRecipes with all recipes
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [cuisineType]); // re-run when cuisineType changes

  // Handle search input change to filter recipes
  useEffect(() => {
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }, [searchQuery, recipes]); // re-run when searchQuery or recipes change

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
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text">{recipe.description}</p>
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

export default Cuisines;
