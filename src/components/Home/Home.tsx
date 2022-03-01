import React from 'react';
import {View, Text} from 'react-native';

import {test} from '../../api';

import {useAreaContext} from '../../contexts/AreaContext';

const Home = () => {
  const {area, setArea} = useAreaContext();

  setTimeout(() => {
    setArea?.({...area, lv2: {name: '강남구', code: 1}});
  }, 1000);

  test();

  return (
    <View>
      <Text>홈</Text>
      <Text>지역: {area.lv2?.name}</Text>
    </View>
  );
};

export default Home;
