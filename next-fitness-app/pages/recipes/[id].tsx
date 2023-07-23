import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Recipe } from '../../lib/recipes';
import RecipeInput from '../../components/RecipeInput';

type RecipePageProps = {
  recipe: Recipe;
};

const RecipePage: React.FC<RecipePageProps> = ({ recipe }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Recipe {id}</h1>
      <RecipeInput recipe={recipe} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const recipe = await getRecipeById(id as string);

  return {
    props: {
      recipe,
    },
  };
};

export default RecipePage;