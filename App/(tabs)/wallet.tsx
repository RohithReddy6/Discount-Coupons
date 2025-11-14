import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function Wallet() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Wallet',
          headerStyle: { backgroundColor: '#2D2D32' },
          headerTitleStyle: { color: '#FFFFFF' },
        }}
      />
      <View className="flex-1 bg-[#141414] px-6 py-6"></View>
    </>
  );
}