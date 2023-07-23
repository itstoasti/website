import { GetServerSideProps } from 'next';
import { GoalTracker } from '../../components/GoalTracker';
import { getGoals } from '../../lib/goals';
import { Goal } from '../../types';

interface GoalsPageProps {
  goals: Goal[];
}

export default function GoalsPage({ goals }: GoalsPageProps) {
  return (
    <div>
      <h1>Goals</h1>
      {goals.map((goal) => (
        <GoalTracker key={goal.id} goal={goal} />
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const goals = getGoals();
  return {
    props: {
      goals,
    },
  };
};