import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";

//------------------Main Tabs Screens------------------
import BookingScreen from "../Screens/BookingScreen/BookingScreen";
import ChatsScreen from "../Screens/ChatsScreen/ChatsScreen";
import ShuffleScreen from "../Screens/ShuffleScreen/ShuffleScreen";
import NotificationsScreen from "../Screens/NotificationsScreen/NotificationsScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
//----------------------------------------------------
const Stack = createStackNavigator();
//-------------------Main Tabs------------------------------
const BookingNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={routes.BookingScreen}>
      <Stack.Screen
        name={routes.BookingScreen}
        component={BookingScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ChatsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={routes.ChatsScreen}>
      <Stack.Screen
        name={routes.ChatsScreen}
        component={ChatsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ShuffleNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={routes.ShuffleScreen}>
      <Stack.Screen
        name={routes.ShuffleScreen}
        component={ShuffleScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const NotificationsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={routes.NotificationsScreen}>
      <Stack.Screen
        name={routes.NotificationsScreen}
        component={NotificationsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={routes.ProfileScreen}>
      <Stack.Screen
        name={routes.ProfileScreen}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export {
  BookingNavigator,
  ChatsNavigator,
  ShuffleNavigator,
  NotificationsNavigator,
  ProfileNavigator,
};
