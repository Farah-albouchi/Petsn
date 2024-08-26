import React, { useState } from 'react';
import { TextInput, type TextProps, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Input, Stack, Divider } from 'native-base';
import { useThemeColor } from '@/hooks/useThemeColor';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

export type ThemedInputProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  type?: 'text' | 'password'; 
  value?: string;
  onChangeText?: (text: string) => void;
};

export function ThemedEdit({
  style,
  lightColor,
  darkColor,
  placeholder,
  type = 'text',
  icon,
  value,
  onChangeText,
  ...rest
}: ThemedInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'label');
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'button');
  const placeholderTextColor = useThemeColor({ light: lightColor, dark: darkColor }, 'button');

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Stack
      w="90%"
      alignItems="center" 
      justifyItems="center"
      marginTop={2}
      style={{
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        borderRadius :30 ,
      }}
    >
      <Input
        w="93%"
        backgroundColor={backgroundColor}
        borderRadius={30}
        paddingLeft={4}
        variant="unstyled"
        InputLeftElement={
          <View style={styles.iconWrapper}>
            {icon}
            <Text style={{ color: 'black', marginLeft: 8, fontSize: 16 }}>|</Text>
          </View>
        }
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        _focus={{ borderColor: 'transparent' }}
        style={[styles.input, style]}
        secureTextEntry={type === 'password' && !showPassword} // Toggle password visibility
        value={value}  // Bind the value
        onChangeText={onChangeText}  // Handle text change
        rightElement={
          type === 'password' ? (
            <TouchableOpacity onPress={handleTogglePasswordVisibility} style={styles.eyeIconWrapper}>
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                size={15}
                color={color}
              />
            </TouchableOpacity>
          ) : undefined
        }
        {...rest}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  input: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'thin',
    fontFamily: 'custom',
    height: 40,
    padding: 4,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    marginVertical: 8,
  },
  eyeIconWrapper: {
    justifyContent: 'center',
    margin: 8,
  },
});

export default ThemedEdit;
