import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { CadScreen } from "../screens/CadScreen";
import { ForgotPasswordScreen } from "../screens/ForgotPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";

const Stack = createStackNavigator()

export const RootNavigation = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    headerShown: false,
                    title: "Tela de Login",
                }}
            />
           
            <Stack.Screen
                name="ForgotPasswordScreen"
                component={ForgotPasswordScreen}
                options={{
                    headerShown: false,
                    title: "Tela de Login",
                }}
            />
            <Stack.Screen
                name="CadScreen"
                component={CadScreen}
                options={{
                    headerShown: false,
                    title: "Tela de Cadastro",
                }}
            />
            <Stack.Screen
                name="HomeNavigation"
                component={TabNavigation}
                options={{
                    headerShown: false,
                    title: "Tela do Aplicativo",
                }}
            />
        </Stack.Navigator>
    );
};
const Tab = createMaterialBottomTabNavigator();
export const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                }}
            />
            <Tab.Screen name="Home2" component={HomeScreen} />
            <Tab.Screen name="Home3" component={HomeScreen} />
        </Tab.Navigator>
    );
};