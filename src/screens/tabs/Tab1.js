import React from 'react'
import { observer } from 'mobx-react'
import {
  StyleSheet, View, Text, Platform, Button, TouchableOpacity
} from 'react-native'
import UserStore from '../../mobxStore/UserStore'
// import PropTypes from 'prop-types'

const Tab1 = observer(() =>  {
  return (
    <View style={styles.container}>
      <Text>{'Tab1'}</Text>
      <Text>{'Count = ', UserStore.count}</Text>
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
    </View>
  )
})

export default Tab1

Tab1.defaultProps = {
}
Tab1.propTypes = {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen'
  }
})
