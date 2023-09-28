import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import Navigation from './src/components/Navigation';
import ProfileApprovedScreen from './src/screens/ProfileApprovedScreen';
import SubscriptionScreen from './src/screens/SubscriptionScreen';

export default function App() {
  return (
    <Navigation />

    // <ProfileApprovedScreen/>
    // <SubscriptionScreen/>

  );
}


// import { StatusBar } from 'expo-status-bar';
// import { AppLoading } from 'expo';
// import { useFonts } from 'expo-font';
// import { Text, View } from 'react-native';
// import Navigation from './src/components/Navigation';

// const App=() =>{
//   const [fontsLoaded] = useFonts({
//     'work-sans': require('./assets/fonts/WorkSans-VariableFont_wght.ttf'),
//   });

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   } else {
//     return <Navigation />;
//   }
  
// };
// export default App;