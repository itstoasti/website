```typescript
import { NextApiRequest, NextApiResponse } from 'next';

interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string;
}

let recipes: Recipe[] = [];

export function getRecipes(): Recipe[] {
  return recipes;
}

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find(recipe => recipe.id === id);
}

export function addRecipe(recipe: Recipe): void {
  recipes.push(recipe);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(getRecipes());
  } else if (req.method === 'POST') {
    const recipe: Recipe = req.body;
    addRecipe(recipe);
    res.status(201).json({ message: 'Recipe added successfully.' });
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
```