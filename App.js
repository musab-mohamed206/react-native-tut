import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import { Asset } from 'expo-asset'
import AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack';


const getFonts = () => Font.loadAsync({
    'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
  });


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(true);
  getFonts();
  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );

  }

}
