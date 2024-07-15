// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext'; // Adjust path based on your actual file structure
import Recipe from './pages/RecipePage'; // Adjust path based on your actual file structure
import SavedRecipes from './components/SavedRecipes'; // Adjust path based on your actual file structure
import NotFound from './pages/NotFound'; // Adjust path based on your actual file structure
import RecipeDetail from './components/RecipeDetails'; // Adjust path based on your actual file structure
import Landing from './pages/Landing'; // Adjust path based on your actual file structure
import "./App.css";

function App() {
  return (
    <Router>
      <RecipeProvider>
        <div className="App">
          <header className="header">
            <div className='Nav'>
              <div className='navContent'><Link to="/">Home</Link></div>
              <div className='navContent'><Link to="/saved-recipes">Saved Recipes</Link></div>
              <div className='navContent'><Link to="/recipes">Recipes</Link></div>
            </div>
          </header>

          <div className="container">
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route path="/saved-recipes" element={<SavedRecipes />} />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
              <Route path="/recipes" element={<Recipe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </RecipeProvider>
    </Router>
  );
}

export default App;
