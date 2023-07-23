import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Macro } from '../../lib/macros';
import MacroTracker from '../../components/MacroTracker';

interface MacroPageProps {
  macro: Macro;
}

const MacroPage: React.FC<MacroPageProps> = ({ macro }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <MacroTracker macro={macro} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const macro = await getMacroById(params.id as string);

  if (!macro) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      macro,
    },
  };
};

export default MacroPage;