import { Loader } from '../../features/Loader';
import { WordsList } from '../../features/WordsList';

import './Home.scss';

type Props = {
  loading: boolean;
};

export const Home: React.FC<Props> = ({ loading }) => {
  return (
    <main className="Home">
      <h2 className="Home__title">Your saved words</h2>

      {loading ? <Loader /> : <WordsList />}
    </main>
  );
};
