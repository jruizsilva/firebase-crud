import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from './screens/stackScreens/HomeScreen'
import { PaperProvider } from 'react-native-paper'
import { CombinedDefaultTheme } from './themes'
import { Platform } from 'react-native'
import { HomeWebScreen } from './screens/stackScreens/HomeWebScreen'

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
          <Stack.Screen
            name="Home"
            component={Platform.OS === 'web' ? HomeWebScreen : HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
