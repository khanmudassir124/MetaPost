import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  act,
  RenderResult,
  screen,
} from '@testing-library/react-native';
import Home from '../src/screens/Home';
import ApiEndPoints from '../src/constants/ApiEndPoints';
import ListCard from '../src/components/ListCard';
import MockResponse from '../src/constants/MockResponse';
import App from '../App';
import ScreenRoutes from '../src/constants/ScreenRoutes';

let fetchMock: any;
let home: RenderResult;
const mockedDispatch = jest.fn();

const navigation = {navigate: jest.fn()};

beforeEach(async () => {
  fetchMock = jest
    .spyOn(global, 'fetch')
    .mockImplementation(
      jest.fn(() =>
        Promise.resolve({json: () => Promise.resolve(MockResponse)}),
      ) as jest.Mock,
    );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Home component', () => {
  // Render Home Screen
  it('should render without errors', async () => {
    await fetchMock();
    await waitFor(() => render(<Home navigation={navigation} />));
  });

  // Fetch Data from API and update in state
  it('should fetch data, render home and update state including falt List', async () => {
    await fetchMock();
    await waitFor(() => render(<Home navigation={navigation} />));

    expect(fetchMock).toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledWith(ApiEndPoints.getPost('0'));
  });

  // Populate Flat List with the data fetched from API response
  it('should Populate Flat List as per the data fetched from API response', async () => {
    await fetchMock();
    home = render(<Home navigation={navigation} />);

    expect(fetchMock).toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledWith(ApiEndPoints.getPost('0'));

    const flatList = home.getByTestId('flatList');
    await act(async () => {
      await waitFor(() =>
        expect(flatList.props.data).toEqual(MockResponse.hits),
      );
    });
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

  // Search Data on Input Search Text Change
  it('should update search text state on change input value', async () => {
    await waitFor(() => {
      const {getByTestId} = render(<Home navigation={navigation} />);
      const inputComponent = getByTestId('searchTextInput');

      fireEvent.changeText(inputComponent, 'Author');

      expect(inputComponent.props.value).toBe('Author');
    });
  });

  // On Search Change the populated data in flat list
  it('should update list on search text change', async () => {
    await fetchMock();
    home = render(<Home navigation={navigation} />);

    expect(fetchMock).toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledWith(ApiEndPoints.getPost('0'));

    const flatList = home.getByTestId('flatList');
    await act(async () => {
      await waitFor(() =>
        expect(flatList.props.data).toEqual(MockResponse.hits),
      );
    });
    const inputComponent = home.getByTestId('searchTextInput');
    fireEvent.changeText(inputComponent, 'redbell');
    expect(inputComponent.props.value).toBe('redbell');

    await waitFor(() => expect(flatList.props.data).toHaveLength(1));
  });

  it('should update list on search text change', async () => {
    fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({json: () => Promise.resolve({})}),
        ) as jest.Mock,
      );

    home = render(<Home navigation={navigation} />);

    const flatList = home.getByTestId('flatList');

    await waitFor(() => expect(flatList.props.data).toHaveLength(0));
    expect(home.getByTestId('notDataFound')).toBeTruthy();
  });

  it('testing Navigate on Press', async () => {
    await waitFor(async () => {
      home = render(<Home navigation={navigation} />);
      const toClick = await home.findByTestId('listCard0');
      fireEvent.press(toClick);
      expect(navigation.navigate).toHaveBeenCalledWith(ScreenRoutes.viewpost, {
        data: MockResponse.hits[0],
      });
    });
  });

  // onClick of list card navigate to next screen and display json
  // it('should navigate to next screen on component click', async () => {
  //   const component = render(<App />);
  //   await act(async () => {
  //     await waitFor(async () => {
  //       const toClick = await component.findByTestId('listCard0');
  //       fireEvent(toClick, 'press');
  //       const viewPost = await screen.findByTestId('viewPostData');
  //       expect(viewPost).toBeDefined();
  //     });
  //   });
  // });
});
