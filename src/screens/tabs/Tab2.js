import React from 'react'
import { observer } from 'mobx-react'
import {
  StyleSheet, View, Text
} from 'react-native'
// import PropTypes from 'prop-types'

const Tab2 = observer(() =>  {
  return (
    <View style={styles.container}>
      <Text>{'Tab2'}</Text>
    </View>
  )
})

export default Tab2

Tab2.defaultProps = {
}
Tab2.propTypes = {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen'
  }
})
