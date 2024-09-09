import React from 'react';
import ThemeProvider from './src/providers/theme.provider';
import RootStack from './src/navigation/rootStack/root.stack';
import {Provider} from 'react-redux';
import {store} from './src/state/reduxStore';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './src/api';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/config/toastConfig';

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RootStack />
        </ThemeProvider>
      </QueryClientProvider>
      <Toast config={toastConfig} />
    </Provider>
  );
};

export default App;
