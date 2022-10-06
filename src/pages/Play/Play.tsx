import { useState } from 'react';
import { Question } from '../../features/Question';

import './Play.scss';

export const Play: React.FC = () => {
  const [start, setStart] = useState(false);

  return (
    <main className="Play">
      {start ? (
        <div className="mx-a">
          <Question />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setStart(true)}
          className="Play__start"
        >
          Start
        </button>
      )}
    </main>
  );
};
