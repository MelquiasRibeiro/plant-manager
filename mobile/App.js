import { StatusBar } from 'expo-status-bar';
import React from 'react';
import StackRoutes from './src/routes/stackRoutes';

export default function App() {
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <StackRoutes />
        </>
    );
}
