import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

test("renders Slacker's list title", () => {
  render(
      <Provider store={store}>
        <App />
      </Provider>
  );
  const linkElement = screen.getByText(/Slacker's List/i);
  expect(linkElement).toBeInTheDocument();
});

test('has sign up button', () => {
  render(
      <Provider store={store}>
        <App />
      </Provider>
  );

  expect(screen.getByText(/signup/i)).toBeInTheDocument();
});
