import React from "react";
import { Text, View } from "react-native";
import { Hit } from "../types/MetaPostType";

interface ViewPostProps {
  navigation: any;
  route: any;
  data?: Hit;
}

const ViewPost: React.FC<ViewPostProps> = ({ route, navigation }) => {
  const data = route?.params?.data;
  return (
    <View>
      <Text testID="viewPostData">{JSON.stringify(data)}</Text>
    </View>
  );
};

export default ViewPost;
