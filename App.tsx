import '@expo/metro-runtime'
import { Navigation } from './src/Navigation'
import { PaperProvider } from 'react-native-paper'
import { AppRegistry } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  return (
    <GestureHandlerRootView>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
      <StatusBar />
    </GestureHandlerRootView>
  )
}
AppRegistry.registerComponent('firebase-crud', () => App)
