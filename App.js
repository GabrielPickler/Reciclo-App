import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import Routes from './src/Routes';
import { FeatherIconsPack } from './feather-icons';
import { default as theme } from './custom-theme.json'; // <-- Import app theme

const App = () => {
  return (
    <>
      <IconRegistry icons={FeatherIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Routes />
      </ApplicationProvider>
    </>
  );
};

export default App;
