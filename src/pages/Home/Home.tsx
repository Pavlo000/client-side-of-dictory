import { WordsList } from '../../features/WordsList';

import './Home.scss';

export const Home: React.FC = () => {
  return (
    <main className="Home">
      <h2 className="Home__title">Your saved words</h2>

      <WordsList />
    </main>
  );
};
