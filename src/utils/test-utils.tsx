import React from 'react';
import renderer from 'react-test-renderer';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {makeStore} from '../redux/store';

export function renderWithProviders(
  ui: React.ReactElement,
  preloadedState = {},
  store = makeStore(), // configureStore({ reducer: { user: userReducer }, preloadedState })
) {
  function Wrapper({children}: any) {
    return <Provider store={store}>{children}</Provider>;
  }

  const result = renderer.create(<Wrapper>{ui}</Wrapper>);

  return {store, result};
}
