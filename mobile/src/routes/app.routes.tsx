import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PlusCircle, SoccerBall } from 'phosphor-react-native';

//Para utilizar as cores do native base
import { useTheme } from 'native-base';

import { New } from '../screens/New';
import { Pools } from '../screens/Pools';
import { Find } from '../screens/Find';
import { Details } from '../screens/Details';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    const { colors, sizes } = useTheme();

    const size = sizes[6];

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarLabelPosition: 'beside-icon',
            //utilizando as cores do tema do native base
            tabBarActiveTintColor: colors.yellow[500], //'red',
            tabBarInactiveTintColor: colors.gray[300], //'blue'
            tabBarStyle: {
                position: 'absolute',
                height: sizes[22],
                borderTopWidth: 0,
                backgroundColor: colors.gray[800]
            },
            tabBarItemStyle: {
                position: 'relative',
                top: Platform.OS === 'android' ? -10 : 0
            }
        }}>
            <Screen
                name="new"
                component={New}
                options={{
                    tabBarIcon: ({ color }) => <PlusCircle color={color} size={size}/>,
                    tabBarLabel: 'Novo Bolão'
                }}
            />

            <Screen
                name="pools"
                component={Pools}
                options={{
                    tabBarIcon: ({color}) => <SoccerBall color={color} size={size}/>,
                    tabBarLabel: 'Meus Bolões'
                }}
            />

            <Screen
                name="find"
                component={Find}
                options={{ tabBarButton: () => null }} //oculta o botão de menu gerado pelo React Navigation
            />

            <Screen
                name="details"
                component={Details}
                options={{ tabBarButton: () => null }} //oculta o botão de menu gerado pelo React Navigation
            />
        </Navigator>
    )
}