import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const LoadingState: React.FC = () => (
  <View className="flex-1 items-center justify-center">
    <ActivityIndicator size="large" color="#CDDC01" />
  </View>
);

export default LoadingState;