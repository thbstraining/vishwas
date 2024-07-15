// Mock service for fetching recipes
export const fetchRecipes = (page, limit) => {
    // Replace with actual API call using axios or fetch
    return new Promise((resolve, reject) => {
      // Simulating delay
      setTimeout(() => {
        const recipes = [
          { id: 1, title: 'Recipe 1', author: 'Author 1', description: 'Description 1' },
          { id: 2, title: 'Recipe 2', author: 'Author 2', description: 'Description 2' },
          // Add more recipes
        ];
        const startIndex = (page - 1) * limit;
        const slicedRecipes = recipes.slice(startIndex, startIndex + limit);
        resolve(slicedRecipes);
      }, 500); // Simulate 500ms delay
    });
  };
  