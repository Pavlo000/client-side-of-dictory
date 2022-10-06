import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './features/Header';
import { Form } from './pages/Form';
import { Home } from './pages/Home';
import { Play } from './pages/Play';
import { getWords } from './api';
import { useAppDispatch } from './app/hooks';
import { setWords } from './features/WordsList/WordsListSlice';
import { Loader } from './features/Loader';
import { Results } from './pages/Results';
import { Menu } from './features/Menu';

import './reset.scss';
import './App.scss';

const App: React.FC = () => {
  const dispath = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [hasErrorAPI, setHasErrorAPI] = useState('');

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const wordsFromServer = await getWords();

        if (typeof wordsFromServer === 'string') {
          setHasErrorAPI(wordsFromServer);
        } else {
          dispath(setWords(wordsFromServer));
        }

        setLoading(false);
      } catch {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="App">
      <div className="App__header">
        <Header />
      </div>

      <div className="App__menu">
        <Menu />
      </div>

      {hasErrorAPI && (
        <h1 className="title has-text-centered">{hasErrorAPI}</h1>
      )}

      {!hasErrorAPI
        && (loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route
              path="/home"
              element={(
                <div className="App__main">
                  <Home />
                </div>
              )}
            />

            <Route
              path="/form"
              element={(
                <div className="App__main">
                  <Form />
                </div>
              )}
            />

            <Route
              path="/play"
              element={(
                <div className="App__main">
                  <Play />
                </div>
              )}
            />

            <Route
              path="/results"
              element={(
                <div className="App__main">
                  <Results />
                </div>
              )}
            />

            <Route
              path="/"
              element={<Navigate to="/home" />}
            />
          </Routes>
        ))}
    </div>
  );
};

export default App;
