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
  value?: string;  // Add a value prop
  onChangeText?: (text: string) => void;  // Add an onChangeText prop
};

export function ThemedInput({
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
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'button');
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'label');
  const placeholderTextColor = useThemeColor({ light: lightColor, dark: darkColor }, 'label');

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Stack w="100%" alignItems="center" marginTop={2}>
      <Input
        w="93%"
        backgroundColor={backgroundColor}
        borderRadius={30}
        paddingLeft={4}
        variant="unstyled"
        InputLeftElement={
          <View style={styles.iconWrapper}>
            {icon}
            <Text style={{ color: 'white', marginLeft: 8, fontSize: 16 }}>|</Text>
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
    color: 'white',
    fontSize: 12,
    fontWeight: 'thin',
    fontFamily: 'light',
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

export default ThemedInput;
