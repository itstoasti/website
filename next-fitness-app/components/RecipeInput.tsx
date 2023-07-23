import React, { useState } from 'react';

interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string;
}

const RecipeInput: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>({ name: '', ingredients: [], instructions: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const handleArrayChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newArray = [...recipe.ingredients];
    newArray[index] = event.target.value;
    setRecipe({ ...recipe, ingredients: newArray });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Add code to save the recipe to the database
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Recipe Name:
        <input type="text" name="name" value={recipe.name} onChange={handleInputChange} />
      </label>
      {recipe.ingredients.map((ingredient, index) => (
        <label key={index}>
          Ingredient {index + 1}:
          <input type="text" value={ingredient} onChange={(event) => handleArrayChange(event, index)} />
        </label>
      ))}
      <button type="button" onClick={() => setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ''] })}>
        Add Ingredient
      </button>
      <label>
        Instructions:
        <textarea name="instructions" value={recipe.instructions} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit Recipe</button>
    </form>
  );
};

export default RecipeInput;