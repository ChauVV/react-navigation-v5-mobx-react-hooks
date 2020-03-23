import React from 'react'
import { observer } from 'mobx-react'
import {
  StyleSheet, View, Text
} from 'react-native'
// import PropTypes from 'prop-types'

const Tab1 = observer(() =>  {
  return (
    <View style={styles.container}>
      <Text>{'Tab1'}</Text>
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
