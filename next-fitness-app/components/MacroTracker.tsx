import React from 'react';

interface Macro {
  id: string;
  name: string;
  amount: number;
}

interface MacroTrackerProps {
  macros: Macro[];
}

const MacroTracker: React.FC<MacroTrackerProps> = ({ macros }) => {
  return (
    <div>
      <h2>Macro Tracker</h2>
      {macros.map((macro) => (
        <div key={macro.id}>
          <h3>{macro.name}</h3>
          <p>{macro.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default MacroTracker;