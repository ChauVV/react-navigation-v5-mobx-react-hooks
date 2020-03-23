import React from 'react'
import { observer } from 'mobx-react'
import {
  StyleSheet, View, Text
} from 'react-native'
// import PropTypes from 'prop-types'

const Settings = observer(() =>  {
  return (
    <View style={styles.container}>
      <Text>{'Settings'}</Text>
    </View>
  )
})

export default Settings

Settings.defaultProps = {
}
Settings.propTypes = {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen'
  }
})
