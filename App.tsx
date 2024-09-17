import '@expo/metro-runtime'
import { Navigation } from './src/Navigation'
import { PaperProvider } from 'react-native-paper'
import { AppRegistry } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <PaperProvider>
      <Navigation />
      <StatusBar />
    </PaperProvider>
  )
}
AppRegistry.registerComponent('firebase-crud', () => App)
