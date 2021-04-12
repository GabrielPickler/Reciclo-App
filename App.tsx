import React, { Fragment } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import Login from './src/pages/Login';
import { default as theme } from './custom-theme.json'; // <-- Import app theme

 const App = () => {
   return (
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <Login/>
    </ApplicationProvider>
   );
 };

 export default App;
