import React from 'react';
import {View, Image} from 'react-native';

import styles from './headerStyle';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/assets/images/logo.png')} />
      <Image style={styles.menu} source={require('../../assets/assets/images/menu.png')} />
    </View>
  );
};

export default Header;