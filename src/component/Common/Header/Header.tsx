import React, {FC} from 'react';
import {View} from 'react-native';

import styles from './styles.js';

const Header: FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.left_slot} />
      <View style={styles.center_slot} />
      <View style={styles.right_slot} />
    </View>
  );
};

export default Header;
