import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { FC } from 'react';
import GoalTracker from '../../components/GoalTracker';
import { getGoalById } from '../../lib/goals';

interface GoalProps {
  goal: {
    id: string;
    name: string;
    target: number;
  };
}

const Goal: FC<GoalProps> = ({ goal }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GoalTracker goal={goal} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;
  const goal = getGoalById(id);

  if (!goal) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      goal,
    },
  };
};

export default Goal;