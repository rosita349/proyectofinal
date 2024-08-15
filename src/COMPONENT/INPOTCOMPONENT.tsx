// InputComponent.tsx
import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  hasIcon?: boolean;
  onIconPress?: () => void;
}

const InputComponent: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  hasIcon = false,
  onIconPress
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
      {hasIcon && (
        <TouchableOpacity onPress={onIconPress} style={styles.iconContainer}>
          <Image
            source={secureTextEntry ? require('../assets/eye-closed.png') : require('../assets/eye-open.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default InputComponent;
