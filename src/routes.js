import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home'
import Metas from './pages/Metas'
import AddMeta from './pages/AddMeta'

const Stack = createStackNavigator()

export default function Routes() {

    const screenOptionStyle = {
        headerStyle: {
            backgroundColor: '#171941'
        },
        headerTintColor: '#bf38ac'
    }
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="Home" component={Home} options={{ headerTitle: "Dashboard"}}/>
                <Stack.Screen name="Metas" component={Metas} options={{ headerTitle: "Listar"}}/>
                <Stack.Screen name="AddMeta" component={AddMeta} options={{ headerTitle: "Cadastrar meta"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}