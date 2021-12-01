import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar component tests', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be defined', async () => {
    const nav = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(nav).toBeDefined();
  });
});
