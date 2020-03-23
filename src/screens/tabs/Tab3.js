import React from 'react'
import { observer } from 'mobx-react'
import {
  StyleSheet, View, Text
} from 'react-native'
// import PropTypes from 'prop-types'

const Tab3 = observer(() =>  {
  return (
    <View style={styles.container}>
      <Text>{'Tab3'}</Text>
    </View>
  )
})

export default Tab3

Tab3.defaultProps = {
}
Tab3.propTypes = {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen'
  }
})
