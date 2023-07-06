import React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';
import Home from '../src/screens/Home';
import ApiEndPoints from '../src/constants/ApiEndPoints';
import ListCard from '../src/components/ListCard';
import MockResponse from '../src/constants/MockResponse';

describe('Home component', () => {
  // Render Home Screen
  it('should render without errors', () => {
    render(<Home navigation={undefined} />);
  });

  it('should have correct initial state', () => {
    const {getByTestId} = render(<Home navigation={undefined} />);

    expect(getByTestId('flatList').props.data).toEqual([]);
    expect(getByTestId('flatList').props.refreshing).toBe(false);
    expect(getByTestId('searchTextInput').props.value).toBe('');
  });

  // Fetch Data from API in every 10 secs and update in state
  it('should fetch data and update state', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve(MockResponse),
    });

    const home = render(<Home navigation={undefined} />);
    const flatList = home.getByTestId('flatList');

    await act(async () => {
      await flatList;
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(ApiEndPoints.getPost('0'));
    await waitFor(() => expect(flatList.props.data).toEqual(MockResponse.hits));
  });

  // List Data in Flat List and ListCard Component Data View Properly
  it('list card is rendered without errors in flat list', async () => {
    const {getByTestId} = render(<ListCard data={MockResponse.hits[0]} />);

    expect(getByTestId(`title`)).toBeDefined();
    expect(getByTestId(`author`)).toBeDefined();
    expect(getByTestId(`url`)).toBeDefined();
    expect(getByTestId(`created_at`)).toBeDefined();
    expect(getByTestId(`tags`)).toBeDefined();
  });

  // onScroll to end fetch data again

  // Search Data on Input Search Text Change
  it('should update search text state on change input value', () => {
    const mockNavigation = {navigate: jest.fn()};
    const {getByTestId} = render(<Home navigation={mockNavigation} />);
    const inputComponent = getByTestId('searchTextInput');

    fireEvent.changeText(inputComponent, 'Author');

    expect(inputComponent.props.value).toBe('Author');
  });

  // onClick of list card navigate to next screen and display json
});
