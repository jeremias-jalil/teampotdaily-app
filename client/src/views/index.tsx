import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ConfigScreen from '../screens/ConfigScreen'
import HomeScreen from '../screens/HomeScreen'
import { SCREENS_ENUM } from '../utils/enum'
import { RootStackParamList } from '../utils/types'
type Props = {}

export default function Views({ }: Props) {

    const RootStack = createStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName={SCREENS_ENUM.HOME}>
                <RootStack.Screen name={SCREENS_ENUM.HOME} component={HomeScreen} />
                <RootStack.Screen name={SCREENS_ENUM.CONFIG} component={ConfigScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}