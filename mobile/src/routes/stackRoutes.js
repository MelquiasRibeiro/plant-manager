import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import bottomNavigation from './bottomNavigation';
import newProduct from '../screens/NewProduct';

const routes = createStackNavigator();

const StackRoutes = () => {
    return (
        <NavigationContainer>
            <routes.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#fafafa',
                    },
                }}
            >
                <routes.Screen name="Home" component={bottomNavigation} />
                <routes.Screen name="newProduct" component={newProduct} />
            </routes.Navigator>
        </NavigationContainer>
    );
};

export default StackRoutes;
