import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from '../components/App';
import store from '../reducers';

test('App component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
