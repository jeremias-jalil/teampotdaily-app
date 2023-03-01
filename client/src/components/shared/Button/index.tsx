import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './style'

type Props = {
    onPress: () => void,
    title: string
}


export default function Button({ onPress, title }: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.appButtonContainer}
        >
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}