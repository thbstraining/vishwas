import React, { createContext, useState } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
    { id: 1, title: 'Spaghetti Carbonara', author: 'John Doe', description: 'A classic Italian pasta dish', ingredients: ['Pasta', 'Eggs', 'Cheese', 'Bacon'], instructions: 'Boil pasta. Cook bacon. Mix eggs and cheese. Combine all.' },
    { id: 2, title: 'Chicken Curry', author: 'Jane Smith', description: 'A spicy and flavorful curry', ingredients: ['Chicken', 'Curry powder', 'Coconut milk', 'Vegetables'], instructions: 'Cook chicken. Add vegetables and curry powder. Simmer with coconut milk.' },
    { id: 3,title: 'Chocolate Chip Cookies',author: 'Alice Johnson',description: 'Classic homemade cookies with chocolate chips',ingredients: ['Flour', 'Butter', 'Sugar', 'Eggs', 'Chocolate Chips', 'Vanilla Extract', 'Baking Soda'],instructions: 'Cream together butter and sugar. Add eggs and vanilla. Mix in dry ingredients and chocolate chips. Bake at 350°F (175°C) for 10-12 minutes.'},
    { id: 4,title: 'Vegetable Stir-Fry',author: 'Emily Green',description: 'Quick and healthy stir-fried vegetables with soy sauce',ingredients: ['Broccoli', 'Carrots', 'Bell Peppers', 'Snap Peas', 'Onion', 'Garlic', 'Soy Sauce', 'Sesame Oil'],instructions: 'Heat sesame oil in a pan. Stir-fry garlic and onion until fragrant. Add remaining vegetables and soy sauce. Cook until vegetables are tender-crisp.'},
    { id: 5, title: 'Chicken Tikka Masala', author: 'Rajesh Kumar', description: 'A popular Indian dish with grilled chicken in a creamy tomato-based sauce', ingredients: ['Chicken', 'Yogurt', 'Tomatoes', 'Cream', 'Onion', 'Garlic', 'Ginger', 'Spices (e.g., garam masala, turmeric, cumin)'], instructions: 'Marinate chicken in yogurt and spices. Grill until charred. Simmer tomatoes, cream, and spices until thickened. Add grilled chicken and serve.' },
    { id: 6, title: 'Vegetable Biryani', author: 'Anjali Sharma', description: 'Fragrant rice dish with mixed vegetables and aromatic spices', ingredients: ['Basmati Rice', 'Mixed Vegetables (e.g., carrots, peas, potatoes)', 'Onion', 'Tomato', 'Yogurt', 'Ghee (clarified butter)', 'Spices (e.g., cardamom, cinnamon, cloves)'], instructions: 'Soak rice and parboil. Fry onions until golden. Cook vegetables and spices. Layer rice and vegetables. Seal and cook until rice is done. Serve hot.' },
    { id: 7, title: 'Mutton Rogan Josh', author: 'Kabir Khan', description: 'Tender mutton pieces in a spiced gravy', ingredients: ['Mutton', 'Yogurt', 'Onion', 'Tomato', 'Garlic', 'Ginger', 'Spices (e.g., garam masala, red chili powder, cumin, coriander)'], instructions: 'Marinate mutton with yogurt and spices. Cook onions, garlic, and ginger. Add tomatoes and spices. Mix in mutton and water. Simmer until mutton is tender.' },
    { id: 8, title: 'Pav Bhaji', author: 'Anita Deshmukh', description: 'Spicy vegetable mash served with buttered bread rolls', ingredients: ['Potatoes', 'Cauliflower', 'Peas', 'Tomatoes', 'Onion', 'Garlic', 'Ginger', 'Butter', 'Spices (e.g., pav bhaji masala, turmeric)'], instructions: 'Boil and mash vegetables. Cook onions, garlic, and ginger with spices. Add tomatoes and mashed vegetables. Cook until thickened. Serve with buttered bread rolls.' },
    { id: 9, title: 'Hyderabadi Biryani', author: 'Ayesha Ali', description: 'Fragrant basmati rice with marinated meat and aromatic spices', ingredients: ['Basmati Rice', 'Chicken or Mutton', 'Yogurt', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Spices (e.g., saffron, cardamom, cloves, bay leaf)'], instructions: 'Marinate meat with yogurt and spices. Layer parboiled rice and marinated meat in a pot. Seal and cook until rice and meat are tender. Serve hot.' },
    { id: 10, title: 'Masoor Dal', author: 'Vijay Patel', description: 'Red lentil curry with Indian spices', ingredients: ['Red Lentils', 'Onion', 'Tomato', 'Garlic', 'Ginger', 'Spices (e.g., turmeric, cumin, coriander)'], instructions: 'Cook onions, garlic, and ginger with spices. Add tomatoes and cook until soft. Mix in lentils and water. Simmer until lentils are soft and curry is thickened.' },
    { id: 11, title: 'Baingan Bharta', author: 'Nisha Verma', description: 'Smoky mashed eggplant with onions and tomatoes', ingredients: ['Eggplant', 'Onion', 'Tomato', 'Garlic', 'Ginger', 'Spices (e.g., cumin, coriander, turmeric)'], instructions: 'Roast eggplant until charred and soft. Cook onions, garlic, and ginger with spices. Add tomatoes and roasted eggplant. Cook until well combined.' },
    { id: 12, title: 'Egg Chilly', author: 'Sandeep Mucherla', description: 'A spicy and tangy Indo-Chinese dish made with eggs', ingredients: ['Eggs', 'Onion', 'Capsicum', 'Green Chillies', 'Garlic', 'Ginger', 'Soy Sauce', 'Chili Sauce', 'Tomato Ketchup', 'Cornflour'], instructions: 'Boil eggs and cut into pieces. Stir-fry garlic and ginger. Add onions, capsicum, and green chillies. Add sauces and mix well. Add egg pieces and toss to coat. Serve hot.' }

  ]);

  const [savedRecipes, setSavedRecipes] = useState([]); // State to manage saved recipes

  const saveRecipe = (id) => {
    const recipeToSave = recipes.find(recipe => recipe.id === id);
    if (recipeToSave && !savedRecipes.some(savedRecipe => savedRecipe.id === id)) {
      setSavedRecipes([...savedRecipes, recipeToSave]);
    }
  };

  const removeRecipe = (id) => {
    setSavedRecipes(savedRecipes.filter(recipe => recipe.id !== id));
  };

  // Hypothetical function to add a removed recipe back
  const addRecipe = (recipe) => {
    setSavedRecipes([...savedRecipes, recipe]);
  };

  return (
    <RecipeContext.Provider value={{ recipes, savedRecipes, saveRecipe, removeRecipe, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
