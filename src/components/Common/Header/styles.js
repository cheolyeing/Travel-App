const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
  },
  left_slot: {
    backgroundColor: 'red',
    flex: 0.15,
  },
  center_slot: {
    backgroundColor: 'blue',
    flex: 0.7,
  },
  right_slot: {
    backgroundColor: 'green',
    flex: 0.15,
  },
});

export default styles;
