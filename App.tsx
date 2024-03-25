import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from "./Navigation/MainTabNavigator";
export default function App() {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
}
