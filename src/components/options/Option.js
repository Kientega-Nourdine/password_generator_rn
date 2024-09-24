import Checkbox from 'expo-checkbox';
import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

function Option({ title, checked, onChangeChecked, id}) {

    return (
        <View style={styles.option}>
            <Text style={styles.optionText}>{title}</Text>
            <Checkbox 
                color={checked ? '#2196F3' : undefined} 
                style={styles.optionCheckboxInput} 
                value={checked} 
                onValueChange={() => onChangeChecked(id)}
            />
      </View>
    );
}

const styles = StyleSheet.create({
  
    option: {
      flexDirection: 'row',
      marginBottom: 16,
      justifyContent: 'space-between',
      alignItems: 'center',
    }, 
    optionText: {
      flex: 1,
    },
    optionNumericInput: {
      textAlign: 'right',
    }, 
    optionCheckboxInput: {
      width: 16,
      height: 16,
    },

});
export default Option;