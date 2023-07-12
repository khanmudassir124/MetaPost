/**
 * @format
 */

import 'react-native';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';
import ViewPost from '../src/screens/ViewPost';
import MockResponse from '../src/constants/MockResponse';
import {render} from '@testing-library/react-native';

describe('Home component', () => {
  const navigation = {navigate: jest.fn()};
  it('renders correctly', () => {
    const component = render(
      <ViewPost
        navigation={navigation}
        route={{params: {data: MockResponse.hits[0]}}}
      />,
    );
    const textComponent = component.getByTestId('viewPostData');
    expect(textComponent.children[0]).toEqual(
      JSON.stringify(MockResponse.hits[0]),
    );
  });
});
