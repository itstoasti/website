import { GetServerSideProps } from 'next';
import { MacroTracker } from '../../components/MacroTracker';
import { getMacros } from '../../lib/macros';

interface MacrosProps {
  macros: {
    id: string;
    name: string;
    amount: number;
  }[];
}

const Macros = ({ macros }: MacrosProps) => {
  return (
    <div>
      <h1>Macros</h1>
      {macros.map((macro) => (
        <MacroTracker key={macro.id} name={macro.name} amount={macro.amount} />
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const macros = getMacros();
  return {
    props: {
      macros,
    },
  };
};

export default Macros;