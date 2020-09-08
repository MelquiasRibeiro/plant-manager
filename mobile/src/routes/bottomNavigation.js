import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Stock from '../screens/Stokc';
import Movement from '../screens/Movement';

const { Navigator, Screen } = createBottomTabNavigator();

const routesBottom = () => {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d',
            }}
        >
            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Entypo
                                name="home"
                                size={size}
                                color={focused ? '#1A2F7B' : color}
                            />
                        );
                    },
                }}
            />
            <Screen
                name="stock"
                component={Stock}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Entypo
                                name="leaf"
                                size={size}
                                color={focused ? '#1A2F7B' : color}
                            />
                        );
                    },
                }}
            />
            <Screen
                name="movement"
                component={Movement}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <MaterialIcons
                                name="attach-money"
                                size={size}
                                color={focused ? '#1A2F7B' : color}
                            />
                        );
                    },
                }}
            />
        </Navigator>
    );
};

export default routesBottom;
