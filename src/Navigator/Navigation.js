import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/welcome/welcome";
import Authentication from "../screens/authentication/authentication";
import Home from "../screens/home/home";
import Basket from "../screens/basket/basket";
import Order from "../screens/order/order";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="authentication" component={Authentication} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="basket" component={Basket} />
        <Stack.Screen name="order" component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
