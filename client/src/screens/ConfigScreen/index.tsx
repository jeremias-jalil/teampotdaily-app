import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { ImageBackground, View } from 'react-native';
import globalStyle from '../../styles/globalStyle';
import { SCREENS_ENUM } from '../../utils/enum';
import { RootStackParamList } from '../../utils/types';


type Props = NativeStackScreenProps<RootStackParamList, SCREENS_ENUM.HOME>;

export default function ConfigScreen({ navigation }: Props) {
    const { container, backgound } = globalStyle;
    return (
        <View style={container}>
            <ImageBackground style={backgound} source={require('../../assets/images/backGroundBase.jpg')} >
            </ImageBackground>
        </View>
    )
}