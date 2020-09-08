import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import bottomNavigation from './bottomNavigation';

const routes = createStackNavigator();

const StackRoutes = () => {
    return (
        <NavigationContainer>
            <routes.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#f0f0f5',
                    },
                }}
            >
                <routes.Screen name="Home" component={bottomNavigation} />
            </routes.Navigator>
        </NavigationContainer>
    );
};

export default StackRoutes;
