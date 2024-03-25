import React from "react";
import { Dimensions, StyleSheet, Image } from "react-native";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  BookingNavigator,
  ChatsNavigator,
  NotificationsNavigator,
  ProfileNavigator,
  ShuffleNavigator,
} from "./CustomNavigation";
import routes from "./routes";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import TabBarIcon from "../Components/TabBarIcon/TabBarIcon";
const Tab = createBottomTabNavigator();

const deviceHeight = Dimensions.get("window").height;

type TabType = {
  name: string;
  component: () => React.JSX.Element;
  options?:
    | BottomTabNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase, string>;
        navigation: any;
      }) => BottomTabNavigationOptions)
    | undefined;
};
type TabsType = TabType[];

const Main_Tabs: TabsType = [
  {
    name: routes.BookingTab,
    component: BookingNavigator,
    options: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <TabBarIcon
          name={"Booking"}
          focused={focused}
          icon={require("../assets/BottomTabsIcons/Booking.png")}
          activeIcon={require("../assets/BottomTabsIcons/BookingActive.png")}
        />
      ),
    },
  },
  {
    name: routes.ChatsTab,
    component: ChatsNavigator,
    options: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <TabBarIcon
          name={"Chats"}
          focused={focused}
          icon={require("../assets/BottomTabsIcons/Chats.png")}
          activeIcon={require("../assets/BottomTabsIcons/ChatsActive.png")}
        />
      ),
    },
  },
  {
    name: routes.ShuffleTab,
    component: ShuffleNavigator,
    //these options are not used
    options: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <TabBarIcon
          name={"Shuffle"}
          focused={focused}
          icon={require("../assets/BottomTabsIcons/Shuffle.png")}
          activeIcon={require("../assets/BottomTabsIcons/ShuffleActive.png")}
        />
      ),
    },
  },
  {
    name: routes.NotificationsTab,
    component: NotificationsNavigator,
    options: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <TabBarIcon
          name={"Notifications"}
          focused={focused}
          icon={require("../assets/BottomTabsIcons/Notifications.png")}
          activeIcon={require("../assets/BottomTabsIcons/NotificationsActive.png")}
        />
      ),
    },
  },
  {
    name: routes.ProfileTab,
    component: ProfileNavigator,
    options: {
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <TabBarIcon
          name={"Profile"}
          focused={focused}
          icon={require("../assets/BottomTabsIcons/Profile.png")}
          activeIcon={require("../assets/BottomTabsIcons/ProfileActive.png")}
        />
      ),
    },
  },
];

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarBackground: () => {
          return (
            <Image
              resizeMode="cover"
              source={require("../assets/blackBottomTex.jpg")}
            />
          );
        },
      }}
      initialRouteName={routes.ShuffleTab}
    >
      {Main_Tabs.map((tab) => {
        return (
          <Tab.Screen
            name={tab.name}
            component={tab.component}
            options={tab.options}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default MainTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: deviceHeight * 0.15,
    borderTopWidth: 0,
  },
});
