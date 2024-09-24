import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from './screens/stackScreens/HomeScreen'
import { PaperProvider } from 'react-native-paper'
import { CombinedDefaultTheme } from './themes'

export type RootStackParamList = {
  Home: undefined
  Add: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function Navigation() {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <NavigationContainer theme={CombinedDefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
