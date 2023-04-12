import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './src/sreens/home/HomeScreen';
import { ProfileScreen } from './src/sreens/profile/ProfileScreen';
// import { LocationListScreen } from './src/sreens/location-list/LocationListScreen';
import { LocationListStackScreen } from './src/sreens/location-list/LocationListStackScreen';
import { Ionicons } from '@expo/vector-icons';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS, SPACING } from './src/utils/theme';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Inicio: 'home',
  Perfil: 'person',
  Explorar: 'search'
}

const screenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name]  
  return {
    tabBarIcon: ({size, color}) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar
  }
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Inicio" component={HomeScreen} />
          <Tab.Screen name="Explorar" component={LocationListStackScreen} />
          <Tab.Screen name="Perfil" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
        
      <StatusBar style="auto" />
    </>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
  }
})
