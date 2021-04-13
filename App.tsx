import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import Routes from './src/Routes'
import { default as theme } from './custom-theme.json'; // <-- Import app theme

 const App = () => {
   return (
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <Routes/>
    </ApplicationProvider>
   );
 };

 export default App;
