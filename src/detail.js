import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles/styles';
import { observer } from 'mobx-react';
import UserStore from './mobxStore/UserStore'
// import PropTypes from 'prop-types'

const Detail = observer((props) =>  {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>{props.route.params.screenName}</Text>
      {
        Platform.select({
          ios:
            <Button
              title='View Bottom Tabs'
              onPress={() => props.navigation.navigate('Bottom Tabs', { name: "param 1" })}
            />,
          android:
            <TouchableOpacity
              style={{ marginBottom: 16 }}
              onPress={() => props.navigation.navigate('Bottom Tabs', { name: "param 1" })}>
              <Text style={{ color: 'blue', fontSize: 20 }}>View Bottom Tabs</Text>
            </TouchableOpacity>
        })
      }
      {
        Platform.select({
          ios:
            <Button
              title='View Top Tabs'
              onPress={() => props.navigation.navigate('Top Tabs', { name: "param 2" })}
            />,
          android:
            <TouchableOpacity
              style={{ marginBottom: 16 }}
              onPress={() => props.navigation.navigate('Top Tabs', { name: "param 2" })}>
              <Text style={{ color: 'blue', fontSize: 20 }}>View Top Tabs</Text>
            </TouchableOpacity>
        })
      }
      {
        Platform.select({
          ios:
            <Button
              title='Pass Data Back'
              onPress={() => props.navigation.navigate('Feed', { data: "We have new data!" })}
            />,
          android:
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Feed', { data: "We have new data!" })}>
              <Text style={styles.androidButtonText}>Pass Data Back</Text>
            </TouchableOpacity>
        })
      }
      <Text>{UserStore.count}</Text>
      {
        Platform.select({
          ios:
            <Button
              title='tang count'
              onPress={() => UserStore.updateCount(1)}
            />,
          android:
            <TouchableOpacity
            onPress={() => UserStore.count += 1}>
              <Text style={styles.androidButtonText}>Pass Data Back</Text>
            </TouchableOpacity>
        })
      }
      {
        Platform.select({
          ios:
            <Button
              title='giam count'
              onPress={() => UserStore.updateCount(-1)}
            />,
          android:
            <TouchableOpacity
            onPress={() => UserStore.count -= 1}>
              <Text style={styles.androidButtonText}>Pass Data Back</Text>
            </TouchableOpacity>
        })
      }
    </View >
  );
});

export default Detail;

Detail.defaultProps = {
};
Detail.propTypes = {
};

