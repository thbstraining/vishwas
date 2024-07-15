import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';

const SavedRecipes = () => {
  const { savedRecipes, removeRecipe, addRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();
  const [recentlyRemoved, setRecentlyRemoved] = useState(null);

  useEffect(() => {
    // Clear recentlyRemoved after 5 seconds if not undone
    let timer;
    if (recentlyRemoved) {
      timer = setTimeout(() => {
        setRecentlyRemoved(null);
      }, 5000); // Adjust the timeout as needed
    }

    return () => {
      clearTimeout(timer);
    };
  }, [recentlyRemoved]);

  const handleRecipeClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  const handleRemove = (recipe, event) => {
    // Prevent the click event from propagating to the parent element
    event.stopPropagation();

    // Remove recipe from saved recipes
    removeRecipe(recipe.id);
    // Store the recently removed recipe for undo option
    setRecentlyRemoved(recipe);
  };

  const handleUndo = () => {
    if (recentlyRemoved) {
      // Add back the recently removed recipe to saved recipes
      addRecipe(recentlyRemoved);
      setRecentlyRemoved(null); // Clear recently removed state
    }
  };

  return (
    <div>
      <h2>Saved Recipes</h2>
      {savedRecipes && savedRecipes.length > 0 ? (
        <div>
          {savedRecipes.map(recipe => (
            <div className="Saved-rec"
              key={recipe.id} 
              onClick={() => handleRecipeClick(recipe.id)} 
              style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}
            >
              <b>{recipe.title}</b>
              <p>{recipe.author}</p>
              <p>{recipe.description}</p>
              <button onClick={(event) => handleRemove(recipe, event)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <div>No saved recipes yet.</div>
      )}
      {recentlyRemoved && (
        <div>
          Removed {recentlyRemoved.title}. <button onClick={handleUndo}>Undo</button>
        </div>
      )}
    </div>
  );
};

export default SavedRecipes;
