import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';

const BottomBar: React.FC = () => {
  return (
    <View style={[styles.container, { backgroundColor: theme.bottomBarBackgroundColor }]}>
      {/* Icons or navigation buttons go here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default BottomBar;
