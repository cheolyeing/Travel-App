import React from 'react';
import {View, Text} from 'react-native';

import {useSearchOptioncontext} from '../../contexts/SearchOptionContext';

const Home = () => {
  const {area, setArea, category, setCategory} = useSearchOptioncontext();

  setTimeout(() => {
    setArea?.('1초');
  }, 1000);
  setTimeout(() => {
    setCategory?.('2초');
  }, 2000);

  return (
    <View>
      <Text>홈</Text>
      <Text>지역: {area}</Text>
      <Text>카테고리: {category}</Text>
    </View>
  );
};

export default Home;
