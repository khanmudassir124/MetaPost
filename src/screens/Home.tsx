import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Hit, MetaPost} from '../types/MetaPostType';
import ApiEndPoints from '../constants/ApiEndPoints';
import {setPostData} from '../redux/reducers/postDataReducer';
import ListCard from '../components/ListCard';
import ScreenRoutes from '../constants/ScreenRoutes';
interface HomeProps {
  navigation: any;
}
const Home: React.FC<HomeProps> = ({navigation}) => {
  const [data, setData] = React.useState<Hit[]>([]);
  const [metaData, setMetaData] = React.useState<MetaPost | any>();
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [loading, setIsLoading] = React.useState<boolean>(true);
  const [searchText, setSearchText] = React.useState<string>('');

  const handleFetchData = () => {
    setIsLoading(true);
    fetch(ApiEndPoints.getPost(currentPage.toString()))
      .then(r => r.json())
      .then((response: MetaPost) => {
        setIsLoading(false);
        setRefreshing(false);
        setMetaData(response);
        setData([...data, ...(response.hits ?? [])]);
      });
  };

  useEffect(() => {
    const intervel = setInterval(() => {
      setCurrentPage(currentPage + 1);
    }, 10000);
    return () => clearInterval(intervel);
  }, [currentPage]);

  useEffect(() => {
    handleFetchData();
  }, [currentPage]);

  //   console.log("CURRENT PAGE: ", currentPage, data.length);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '100%',
          padding: 10,
        }}>
        <TextInput
          testID="searchTextInput"
          style={{
            padding: 5,
            paddingHorizontal: 10,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 5,
          }}
          value={searchText}
          onChangeText={t => {
            setSearchText(t);
          }}
          placeholder="search..."
        />
      </View>
      <FlatList
        testID="flatList"
        contentContainerStyle={{
          width: Dimensions.get('window').width,
          padding: 5,
          paddingBottom: 100,
        }}
        data={
          searchText && searchText.length > 0
            ? data?.filter(
                item =>
                  item?.title
                    ?.toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase()) ||
                  item?.author
                    ?.toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase()),
              )
            : data
        }
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({item, index}) => (
          <TouchableOpacity
            testID={'listCard' + index}
            style={{width: '100%', padding: 5}}
            onPress={() => {
              navigation.navigate(ScreenRoutes.viewpost, {data: item});
            }}>
            <ListCard data={item} />
          </TouchableOpacity>
        )}
        onRefresh={() => {
          setRefreshing(true);
          setData([]);
          setCurrentPage(0);
        }}
        refreshing={refreshing}
        maxToRenderPerBatch={10}
        onEndReachedThreshold={0.7}
        onEndReached={() => {
          setCurrentPage(currentPage + 1);
        }}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="grey" /> : null
        }
        showsVerticalScrollIndicator={true}
        alwaysBounceVertical={true}
        ListEmptyComponent={
          !loading ? (
            <Text
              testID="notDataFound"
              style={{
                width: '100%',
                textAlign: 'center',
              }}>
              Not Data Found
            </Text>
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
