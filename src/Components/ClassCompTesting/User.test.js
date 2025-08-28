import renderer from 'react-test-renderer';
import Users from './Users';


test("Testing a Class component", () => {
    const componentData = renderer.create(<Users />).getInstance();
    let a = "10";
    expect(componentData.getUserList(a)).toMatch(a);
})