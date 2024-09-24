import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Option from './src/components/options/Option';

export default function App() {

  const [password, setPassword] = useState('')
  const [checkedOption, setCheckedOption] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  // update specific option
  const handleCheckChange = (id) => {
    setCheckedOption((prevState) => ({ ...prevState, [id]: !prevState[id] })); 
  }

  return (
    <View style={styles.container}>
      <View style={styles.generator}>

        <TouchableOpacity style={styles.closeBtn} >
          <MaterialIcons name='cancel' size={24} />
        </TouchableOpacity>

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

          <Option id="uppercase" title='Include Uppercase Letters:' checked={checkedOption.uppercase} onChangeChecked={handleCheckChange} />
          <Option id="lowercase" title='Include Lowercase Letters:' checked={checkedOption.lowercase} onChangeChecked={handleCheckChange} />
          <Option id="numbers" title='Include Numbers:' checked={checkedOption.numbers} onChangeChecked={handleCheckChange} />
          <Option id="symbols" title='Include Symbols:' checked={checkedOption.symbols} onChangeChecked={handleCheckChange} />

        </View>

        <TouchableOpacity onPress={() => {}}>
          <LinearGradient 
            colors={['#ad25fc', '#518cd4']}
            start={[0, 0]}
            end={[1, 0]}
            style={styles.submitBtn}
          >
            <Text style={styles.submitBtnText}>Generate Password</Text>
          </LinearGradient>
        </TouchableOpacity>

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
    position: 'relative',
    width: '100%',
    maxWidth: 640,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 20,
  },
  closeBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
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
  },
  submitBtn: {
    marginTop: 4,
    marginBottom: 0,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  submitBtnText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});
