import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const { id, title, author, description } = recipe;

  return (
    <div className="recipe-card">
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>{description}</p>
      <Link to={`/recipe/${id}`}>View Recipe</Link> {/* Link to RecipeDetail with recipe id */}
    </div>
  );
};

export default RecipeCard;
