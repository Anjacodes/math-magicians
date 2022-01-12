import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Calculator component', () => {
  it('Renders correctly calculator component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
