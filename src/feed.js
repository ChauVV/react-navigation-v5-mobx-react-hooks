import React from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';
import { styles } from './styles/styles';
import { observer } from 'mobx-react';
// import PropTypes from 'prop-types'

const Feed = observer((props) =>  {
    const detailResult = props.route.params;
    return (
      <View style={styles.center}>
        <Text style={styles.title}>
          {detailResult ? detailResult.data : 'Navigation Drawer'}
        </Text>
        {
          Platform.select({
            ios:
              <Button
                title='Go to Feed Item'
                onPress={() => props.navigation.navigate('Detail', { screenName: "My Detail Screen" })}
              />,
            android:
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Detail', { screenName: "My Detail Screen" })}>
                <Text style={styles.androidButtonText}>Go to FeedItem</Text>
              </TouchableOpacity>
          })
        }

      </View>
    );
});

export default Feed;

Feed.defaultProps = {
};
Feed.propTypes = {
};
