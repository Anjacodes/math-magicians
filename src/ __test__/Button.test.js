import renderer from 'react-test-renderer';
import Button from '../components/Button';

it('Button renders correctlty', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
