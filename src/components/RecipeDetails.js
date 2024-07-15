// RecipeDetail.js
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';

const RecipeDetail = () => {
  const { id } = useParams(); // Extract the 'id' parameter from the URL
  const { recipes, savedRecipes, saveRecipe } = useContext(RecipeContext); // Get the 'recipes' array, savedRecipes array, and saveRecipe function from context

  // Find the recipe by id
  const recipe = recipes?.find(recipe => recipe.id === parseInt(id, 10));

  const handleSaveRecipe = () => {
    saveRecipe(parseInt(id, 10)); // Call saveRecipe function from context with recipe id
    alert(`Recipe "${recipe.title}" saved!`); // Example alert to indicate recipe is saved
  };

  if (!recipe) {
    return <p>Recipe not found.</p>; // Render a message if recipe is not found
  }

  // Check if recipe is already saved
  const isRecipeSaved = savedRecipes.some(savedRecipe => savedRecipe.id === recipe.id);

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <p>By: {recipe.author}</p>
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      {isRecipeSaved ? (
        <p>Recipe already saved.</p> // Show message if recipe is already saved
      ) : (
        <button onClick={handleSaveRecipe} style={{ marginRight: '10px' }}>Save Recipe</button> // Save Recipe button with margin-right
      )}
      <button><Link to="/" className="home-button">Home</Link></button> {/* Link to navigate back to the home page */}
    </div>
  );
};

export default RecipeDetail;
