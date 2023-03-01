import React from 'react';

import { GlobalProvider } from './src/context';

import Views from './src/views';

export default function App() {
  return (
    <GlobalProvider>
      <Views />
    </GlobalProvider>
  );
}
