```typescript
type Goal = {
  id: string;
  name: string;
  description: string;
  target: number;
  progress: number;
};

let goals: Goal[] = [];

export function getGoals(): Goal[] {
  return goals;
}

export function getGoal(id: string): Goal | undefined {
  return goals.find(goal => goal.id === id);
}

export function addGoal(goal: Omit<Goal, 'id'>): Goal {
  const newGoal = { id: Date.now().toString(), ...goal };
  goals.push(newGoal);
  return newGoal;
}

export function updateGoal(id: string, updatedGoal: Partial<Omit<Goal, 'id'>>): Goal | undefined {
  const goalIndex = goals.findIndex(goal => goal.id === id);
  if (goalIndex > -1) {
    goals[goalIndex] = { ...goals[goalIndex], ...updatedGoal };
    return goals[goalIndex];
  }
}

export function deleteGoal(id: string): boolean {
  const goalIndex = goals.findIndex(goal => goal.id === id);
  if (goalIndex > -1) {
    goals.splice(goalIndex, 1);
    return true;
  }
  return false;
}
```