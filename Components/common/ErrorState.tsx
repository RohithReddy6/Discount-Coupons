import React from 'react';
import { View, Text } from 'react-native';

interface ErrorStateProps {
  message: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message }) => (
  <View className="flex-1 items-center justify-center">
    <Text className="text-red-500">{message}</Text>
  </View>
);

export default ErrorState;