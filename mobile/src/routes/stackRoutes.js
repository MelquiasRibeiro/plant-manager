import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import bottomNavigation from './bottomNavigation';
import newProduct from '../screens/NewProduct';
import sucess from '../screens/Sucess';
import NewActivity from '../screens/NewActivity';

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
                <routes.Screen name="sucess" component={sucess} />
                <routes.Screen name="newActivity" component={NewActivity} />
            </routes.Navigator>
        </NavigationContainer>
    );
};

export default StackRoutes;
