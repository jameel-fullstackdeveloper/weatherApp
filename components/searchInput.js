import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native'

const SearchInput = (props)=> {
    return (
        <View style= {styles.container}>
            <TextInput 
                autoCorrect={false} 
                placeholder={props.placeholder} 
                placeholderTextColor="white" 
                underlineColorAndroid="transparent" 
                style={styles.textInput} 
                clearButtonMode="always"
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        height: 40, 
        marginTop: 20, 
        backgroundColor: '#666', 
        marginHorizontal: 40, 
        paddingHorizontal: 10, 
        borderRadius: 5, 
    },
    textInput : {
        flex: 1, 
        color: 'white'
    }
})

export default SearchInput;