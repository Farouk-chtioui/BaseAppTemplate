import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import TopBar from './src/components/TopBar';
import BottomBar from './src/components/BottomBar';
import theme from './src/theme';

const App: React.FC = () => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <StatusBar barStyle={theme.statusBarTheme === "light" ? "light-content" : "dark-content"} />
      <TopBar />
      <BottomBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
