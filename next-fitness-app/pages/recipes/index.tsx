import { NextPage } from 'next';
import { RecipeInput } from '../../components/RecipeInput';
import { getRecipes } from '../../lib/recipes';
import styles from '../../styles/RecipeInput.module.css';

interface RecipesPageProps {
  recipes: Array<{ id: string, name: string, ingredients: string[] }>;
}

const RecipesPage: NextPage<RecipesPageProps> = ({ recipes }) => {
  return (
    <div className={styles.container}>
      <h1>Recipes</h1>
      <RecipeInput />
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const recipes = await getRecipes();
  return { props: { recipes } };
}

export default RecipesPage;