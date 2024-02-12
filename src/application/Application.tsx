import '../index.css';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import App from '../App';
import { Header } from '../components';
import { store } from '../redux';
import { routesConfig } from '../router';
import styles from './Application.module.scss';

export const Application = () => (
  <Provider store={store}>
    <div className={styles.page}>
      <Header />

      <div className={styles.content}>
        <div className={styles.content__wrapper}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                {routesConfig.map((route) => (
                  <Route
                    key={route.path ?? uuidv4()}
                    {...route}
                  />
                ))}
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  </Provider>
);

export default React.memo(Application);
