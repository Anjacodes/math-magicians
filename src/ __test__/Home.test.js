import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('renders Home correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
