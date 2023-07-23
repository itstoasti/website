import React from 'react';

interface Goal {
  id: string;
  name: string;
  description: string;
  status: string;
}

interface GoalTrackerProps {
  goals: Goal[];
}

const GoalTracker: React.FC<GoalTrackerProps> = ({ goals }) => {
  return (
    <div>
      <h2>Goal Tracker</h2>
      {goals.map((goal) => (
        <div key={goal.id}>
          <h3>{goal.name}</h3>
          <p>{goal.description}</p>
          <p>Status: {goal.status}</p>
        </div>
      ))}
    </div>
  );
};

export default GoalTracker;