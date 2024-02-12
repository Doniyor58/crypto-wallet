import { Middleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

/** thunk * */
const middlewares: Middleware[] = [thunk];

/** redux-logger * */
export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action) => (action.error ? 'firebrick' : 'deepskyblue'),
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005',
  },
});

const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  middlewares.push(logger);
}

export { middlewares };
