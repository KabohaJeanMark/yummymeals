import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import MealsContainer from '../containers/Meals';
import store from '../reducers';

describe('MealsContainer component tests', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <MealsContainer />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be defined', async () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <MealsContainer />
        </Provider>
      </BrowserRouter>,
    );
    expect(component).toBeDefined();
  });
});
