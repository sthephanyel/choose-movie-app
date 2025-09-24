/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import { Routes } from './src/routes/index';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { store } from './src/redux/store/index';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  const isDarkMode = useColorScheme() === 'dark';
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <PersistGate persistor={persistor}>
            <SafeAreaProvider>
              <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
              <Routes/>
            </SafeAreaProvider>
          </PersistGate>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();
//   const persistor = persistStore(store);

//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <PersistGate persistor={persistor}>
//           <Routes/>
//         </PersistGate>
//       </NavigationContainer>
//     </Provider>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
