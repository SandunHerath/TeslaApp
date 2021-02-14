import React from 'react';
import { View , Pressable ,Text } from 'react-native';
import styles from './buttonStyle'
const buttonItem=(props)=>{
    const {type,content,onPress} = props;
    const backgroundColor= type==='primary'? '#171A2bcc' : '#ffffffa6'
    const textColor= type==='primary'? 'white' : '#171a20'
    return(
        <View style={styles.container}>
            <Pressable 
            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress={()=>
                onPress()
            }
            >
                <Text style={[styles.text,{color:textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};
export default buttonItem;