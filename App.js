import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewIcons from "react-native-vector-icons/Ionicons";

import homeScreen from "./screens/HomeScreen";
import matchesScreen from "./screens/MatchesScreen";
import profileScreen from "./screens/ProfileScreen";
import statisticsScreen from "./screens/StatisticsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
          tabBarIcon: ({focused, color, size}) => {
             let icon;
             if (route.name === "Home") {
               icon = focused ? "home" : "home-outline";
             } else if (route.name === "My Matches") {
               icon = focused ? "trophy" : "trophy-outline";
             } else if (route.name === "Statistics") {
                icon = focused ? "cellular" : "cellular-outline";   
             } else if (route.name === "Profile") {
               icon = focused ? "person" : "person-outline";
             }
             return <NewIcons name={icon} size={size} color={color} />
          },
      })}
      >
        <Tab.Screen name="Home" component={homeScreen}/>
        <Tab.Screen name="My Matches" component={matchesScreen}/>
        <Tab.Screen name="Statistics" component={statisticsScreen}/>
        <Tab.Screen name="Profile" component={profileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}