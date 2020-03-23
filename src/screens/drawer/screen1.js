import React from 'react'
import { observer } from 'mobx-react'
import {
  StyleSheet, View, Text
} from 'react-native'
// import PropTypes from 'prop-types'

const Contacts = observer(() =>  {
  return (
    <View style={styles.container}>
      <Text>{'Contacts'}</Text>
    </View>
  )
})

export default Contacts

Contacts.defaultProps = {
}
Contacts.propTypes = {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen'
  }
})
