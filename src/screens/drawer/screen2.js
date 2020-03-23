import React from 'react'
import { observer } from 'mobx-react'
import {
  StyleSheet, View, Text
} from 'react-native'
// import PropTypes from 'prop-types'

const Favorites = observer(() =>  {
  return (
    <View style={styles.container}>
      <Text>{'Favorites'}</Text>
    </View>
  )
})

export default Favorites

Favorites.defaultProps = {
}
Favorites.propTypes = {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen'
  }
})
