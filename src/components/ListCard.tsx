import React from 'react';
import {View, Text} from 'react-native';
import {Hit} from '../types/MetaPostType';
interface ListCardProp {
  data: Hit;
}
const ListCard: React.FC<ListCardProp> = ({data}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        paddingHorizontal: 10,
      }}>
      <View style={{display: 'flex', width: '100%', flexDirection: 'row'}}>
        <Text
          style={{
            width: '20%',
          }}>
          Title :
        </Text>
        <Text style={{fontWeight: 'bold', width: '80%'}} testID="title">
          {data?.title}
        </Text>
      </View>
      <View style={{display: 'flex', width: '100%', flexDirection: 'row'}}>
        <Text
          style={{
            width: '20%',
          }}>
          Author :
        </Text>
        <Text style={{fontWeight: 'bold', width: '80%'}} testID="author">
          {data?.author}
        </Text>
      </View>
      <View style={{display: 'flex', width: '100%', flexDirection: 'row'}}>
        <Text
          style={{
            width: '20%',
          }}>
          Url :
        </Text>
        <Text style={{fontWeight: 'bold', width: '80%'}} testID="url">
          {data?.url}
        </Text>
      </View>
      <View style={{display: 'flex', width: '100%', flexDirection: 'row'}}>
        <Text
          style={{
            width: '20%',
          }}>
          Tags :
        </Text>
        <Text style={{fontWeight: 'bold', width: '80%'}} testID="tags">
          {data?._tags}
        </Text>
      </View>
      <View style={{display: 'flex', width: '100%', flexDirection: 'row'}}>
        <Text
          style={{
            width: '20%',
          }}>
          Created :
        </Text>
        <Text style={{fontWeight: 'bold', width: '80%'}} testID="created_at">
          {data?.created_at}
        </Text>
      </View>
    </View>
  );
};

export default ListCard;
