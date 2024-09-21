import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [password, setPassword] = useState('')
  const [isChecked, setIsChecked] = useState(true)

  return (
    <View style={styles.container}>
      <View style={styles.generator}>
        <Text style={styles.title}>Password Generator</Text> 

        <View style={styles.password_wrap}>
          <TextInput 
            style={styles.password_wrapInput}
            value={password}
            placeholder="Generate a password"
            editable={false}
            placeholderTextColor='#888'
          />
          <TouchableOpacity style={styles.touchable}>
            <MaterialIcons name='content-copy' size={24} color='#ad25fc' />
          </TouchableOpacity>

          <View style={styles.gradientContainer}>
            <LinearGradient
              colors={['#ad25fc', '#518cd4']}
              start={[0, 0]}
              end={[1, 0]}
              style={styles.gradient}
            />
          </View>
        </View>

        <View>

          <View style={styles.option}>
            <Text style={styles.optionText} selectable={false}>Password length:</Text>
            <TextInput 
              style={styles.optionNumericInput}
              keyboardType='numeric'
              defaultValue='16'
            />
          </View>

          <View style={styles.option}>
            <Text style={styles.optionText}>Include Uppercase Letters:</Text>
            <Checkbox color={isChecked ? '#2196F3' : undefined} style={styles.optionCheckboxInput} value={isChecked} />
          </View>

          <View style={styles.option}>
            <Text style={styles.optionText}>Include Lowercase Letters:</Text>
            <Checkbox color={isChecked ? '#2196F3' : undefined} style={styles.optionCheckboxInput} value={isChecked} />
          </View>

          <View style={styles.option}>
            <Text style={styles.optionText}>Include Numbers:</Text>
            <Checkbox color={isChecked ? '#2196F3' : undefined} style={styles.optionCheckboxInput} value={isChecked} />
          </View>

          <View style={styles.option}>
            <Text style={styles.optionText}>Include Symbols:</Text>
            <Checkbox color={isChecked ? '#2196F3' : undefined} style={styles.optionCheckboxInput} value={isChecked} />
          </View>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    backgroundColor: '#282847',
  },
  generator: {
    width: '100%',
    maxWidth: 640,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  title: {
    color: '#282847',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  password_wrap: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  password_wrapInput: {
    // borderWidth: 1,
    flex: 1,
    padding: 6,
    color: '#282847',
    fontStyle: 'italic',

  },
  gradientContainer: {
    position: 'absolute',
    top: '100%', // Placer en bas
    left: 0,
    right: 0,
    height: 3,
  },
  gradient: {
    flex: 1,
    borderRadius: 3,
  },
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
  }
});
