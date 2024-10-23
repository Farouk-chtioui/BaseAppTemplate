import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const TopBar: React.FC = () => {
  return (
    <View style={[styles.container, { backgroundColor: theme.topBarBackgroundColor }]}>
      <Text style={[styles.title, { color: theme.topBarIconTextColor }]}>
        My Custom App
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TopBar;
