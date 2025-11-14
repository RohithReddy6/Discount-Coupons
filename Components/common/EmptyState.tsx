import React from 'react';
import { View, Text } from 'react-native';

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => (
  <View className="flex-1 items-center justify-center">
    <Text className="text-gray-400">{message}</Text>
  </View>
);

export default EmptyState;