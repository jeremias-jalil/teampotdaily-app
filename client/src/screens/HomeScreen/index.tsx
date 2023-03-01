import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import Button from '../../components/shared/Button';
import globalStyle from '../../styles/globalStyle';
import { SCREENS_ENUM } from '../../utils/enum';
import { RootStackParamList } from '../../utils/types';
import style from './style';

type Props = NativeStackScreenProps<RootStackParamList, SCREENS_ENUM.HOME>;

export default function HomeScreen({ navigation }: Props) {
    const { logo, teapot, buttonContainer } = style;
    const { container, backgound } = globalStyle;

    return (
        <View style={container}>
            <ImageBackground style={backgound} source={require('../../assets/images/backGroundBase.jpg')} >
                <Image style={logo} source={require('../../assets/images/LogoTeamPot.png')} />
                <Image style={teapot} source={require('../../assets/images/teapot.gif')} />
                <View style={buttonContainer}>
                    <Button
                        onPress={() => navigation.navigate(SCREENS_ENUM.CONFIG)}
                        title="Start"
                    />
                </View>
            </ImageBackground>
        </View>
    )
}