import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  Card,
  Avatar,
  Button,
} from 'react-native-elements';

const HouseNeedEntry = ({ houseNeed, claimNeed, completeNeed, firstName, userId }) => {
  return (
    <View>
      <Text>{houseNeed.text}</Text>
      <Text>Posted: {houseNeed.poster}</Text>
      {!houseNeed.claimerId &&
        <Button
          title="CLAIM"
          onPress={() => {
            claimNeed(houseNeed.id);
            houseNeed.claimer = firstName;
          }}
        />
      }
      {houseNeed.claimer &&
        <View>
          <Text>Claimed: {houseNeed.claimer}</Text>
        </View>
      }
      {houseNeed.claimerId === userId &&
        <Button
          title="DONE"
          onPress={() => {
            completeNeed(houseNeed.id);
          }}
        />
      }
    </View>
  );
};

export default HouseNeedEntry;
