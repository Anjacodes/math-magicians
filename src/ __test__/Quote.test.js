import renderer from 'react-test-renderer';
import Quote from '../components/Quote'

it('renders Quote correctly', () => {
  let tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
})