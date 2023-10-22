import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import TestRoute from '../screens/TestRoute'

const Stack = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="TestRoute"
        component={TestRoute}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}